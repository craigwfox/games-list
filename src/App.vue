<template>
  <div id="app">
    <h1>Games Lists</h1>
    <GameTable tableName="Games Legacy" :tableData="objGamesLegacy"></GameTable>
  </div>
</template>

<script>
import Papa from 'papaparse';
import GameTable from './components/GameTable.vue';

export default {
  name: 'app',
  components: {
    GameTable
  },
  data() {
    return {
      objGamesLegacy: {}
    }
  },
  mounted() {
    Papa.parse('https://raw.githubusercontent.com/craigwfox/games-list/master/src/assets/games-played-legacy.csv', {
      download: true,
      delimiter: ',',
      newline: '\n',
      complete: results => {
        let newobj = {};

        const loopGames = gameArry => {
          gameArry.forEach(gameName => {
            if (gameName.length > 0) {
              let arrayPos = gameArry.indexOf(gameName) + 1;

              newobj[arrayPos].games.push(gameName);
            }
          });
        };

        let consoleId = 0;
        results.data[0].forEach(element => {
          newobj[consoleId + 1] = {
            id: consoleId + 1,
            name: results.data[0][consoleId],
            games: []
          };
          consoleId += 1;
        });

        for (let i = 1; i < (results.data.length - 1); i++) {
          const gameArry = results.data[i];
          loopGames(gameArry);
        }

        this.objGamesLegacy = newobj;
      }
    });
  }
}
</script>

<style>
:root {
  --clr-dark: #36393B;
  --clr-link: #0CA5B0;
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;

  margin: 0;

  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Condensed', sans-serif;
}

#app {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.5rem 0;
}

h1 {
  margin: 0;
}
</style>
