<template>
  <div class="game-table">
    <h2>{{listName}}</h2>

    <div class="game-list-nav">
      <button v-for="gameconsole in objGamesData" :value="gameconsole.id" :key="gameconsole.id" v-on:click="gameListActive = gameconsole.id">{{gameconsole.name}}</button>
    </div>

    <div class="game-list">
      <section class="game-list__console" v-for="gameconsole in objGamesData" :value="gameconsole.id" :key="gameconsole.id">

        <h3 v-show="gameListActive === gameconsole.id">{{gameconsole.name}}</h3>
        <article v-show="gameListActive === gameconsole.id" v-for="game in gameconsole.games" :key="game.slug">
          <span class="img" aria-hiden="true" :style="`background-image: url('` + game.backgound + `')`"></span>
          <h4>{{game.name}}</h4>
          <ul>
            <li><strong>Year Released:</strong> {{game.release | dateFormat('MM/DD/YY') }}</li>
            <li><strong>Year Played:</strong> {{game.yearplayed}}</li>
            <li><strong>Developer:</strong> {{game.dev}}</li>
            <li><strong>Genres:</strong>
              {{ game.genres.join(', ') }}
            </li>
          </ul>
        </article>

      </section>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import Papa from 'papaparse';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: 'GameList',
  props: {
    listName: String,
    listYear: String,
    listData: String
  },
  filters: {
    dateFormat: function(value, format) {

      if (value) {
        value = value.split("-");
        format = format.split("/");

        let vYear = value[0],
            vMonth = value[1],
            vDay = value[2];

        let dfPos = [
          format[0],
          format[1],
          format[2]
        ];

        let datePretty = [];
        for (let i = 0; i < 3; i++) {
          if (dfPos[i] === 'MM') {
            datePretty.push(vMonth)
          } else if (dfPos[i] === 'DD') {
            datePretty.push(vDay)
          } else if (dfPos[i] === 'YY') {
            datePretty.push(vYear)
          }
        }

        return `${datePretty[0]}/${datePretty[1]}/${datePretty[2]}`;
      }
    }
  },
  data () {
    return {
      gameListActive: null,
      objGamesData: {}
    }
  },
  mounted() {
    Papa.parse(this.listData, {
      download: true,
      delimiter: ',',
      newline: '\n',
      complete: results => {
        function isEven(n) {
          return n % 2 == 0;
        }

        let newobj = {};

        const collectGenres = function(inputGenreArry) {
          let genreArry = [];

          inputGenreArry.forEach(element => {
            genreArry.push(element.name);
          });

          return genreArry;
        };

        const addConsoles = gameArry => {
          for (let i = 0; i < gameArry.length; i++) {
            if (gameArry[i].length > 0 && isEven(gameArry.indexOf(gameArry[i]))) {
              let consoleId = results.data[1][i + 1];

              if (!newobj[consoleId]) {
                newobj[consoleId] = {
                  id: results.data[1][i + 1],
                  name: results.data[1][i],
                  games: []
                };
              }
            }
          }
        };

        const addGames = gameArry => {
          for (let i = 0; i < gameArry.length; i++) {
            if (gameArry[i].length > 0 && isEven(gameArry.indexOf(gameArry[i]))) {
              let gameName = gameArry[i],
                gameNameEncode = encodeURIComponent(gameName),
                consoleId = results.data[1][i + 1];

              axios.get(`https://api.rawg.io/api/games?page_size=1&search=${gameNameEncode}`)
                .then(response => {
                  let apiresult = response.data.results[0];

                  newobj[consoleId].games.push({
                    name: gameName,
                    slug: apiresult.slug,
                    release: apiresult.released,
                    yearplayed: this.listYear,
                    dev: 'stupid api',
                    genres: collectGenres(apiresult.genres),
                    backgound: apiresult.background_image
                  });
                });
            }
          }
        };

        const loopGames = function(cb) {
          for (let i = 4; i < (results.data.length); i++) {
            const gameArry = results.data[i];
            addConsoles(gameArry);
            addGames(gameArry);
          }
          cb();
        }

        loopGames(()=> {
          this.objGamesData = newobj;
        });
      }
    });
  }
}
</script>

<style scoped>
  .game-table {
    /* flex-grow: 1; */
    display: grid;

    grid-template-areas: "header header"
    "nav list";
    grid-template-columns: 10rem auto;
    grid-template-rows: 3rem calc(100% - 3rem);

    margin: 0 -1.5rem;
  }

  .game-table h2 {
    grid-area: header;

    margin: 0 0 0.5rem;
    padding: 0 1.5rem;
  }

  .game-list-nav {
    grid-area: nav;

    display: flex;
    flex-direction: column;

    background: var(--clr-dark);
    border-top: 0.3rem solid var(--clr-dark);
  }

  .game-list-nav button {
    margin: 0;
    padding: 1rem;

    background: var(--clr-dark);
    border: 0;
    border-bottom: 0.1rem solid var(--clr-light-alt);

    cursor: pointer;
    line-height: 1;
    color: var(--clr-light-alt);
  }

  .game-list-nav button:last-child {
    border-bottom: 0;
  }

  .game-list {
    grid-area: list;

    padding: 1rem 2rem 2rem;

    border-top: 0.3rem solid var(--clr-dark);
  }

  .game-list h3 {
    grid-column: 1 / 3;
    grid-row: 1;
    margin: 0;

    font-size: 1.7rem;
  }

  .game-list__console {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  .game-list article {
    display: grid;
    grid-template-columns: 7rem auto;
    grid-template-rows: auto auto;

    position: relative;

    padding-bottom: 2rem;
    margin-bottom: 1rem;

    border-bottom: 1px solid var(--clr-dark);
  }
  
  .game-list .img {
    grid-column: 1;
    grid-row: 1 / 3;

    display: block;

    margin-right: 1rem;

    background-size: cover;
    background-position: center;
  }

  .game-list h4 {
    grid-column: 2;
    grid-row: 1;

    position: relative;
    z-index: 2;

    margin: 0;

    color: var(--clr-primary);
    font-size: 1.2rem;
  }

  .game-list ul {
    grid-column: 2;
    grid-row: 2;

    position: relative;
    z-index: 2;

    margin: 0;
    padding: 0;

    font-size: 1rem;
    list-style-type: none;
  }

  .game-list li {}

  .game-list strong {
    font-family: var(--ff-cond);
  }
</style>
