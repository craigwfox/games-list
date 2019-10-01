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
    Papa.parse('https://craigwfox.com/assets/games-played-legacy.csv', {
      download: true,
      delimiter: ',',
      newline: '\n',
      complete: results => {
        let newobj = {
          
        };

        for(let i = 0; i < results.data[0].length; i++) {
          let objId = i + 1;
          newobj[objId] = {
            id: objId,
            name: results.data[0][i],
            games: []
          }
        }

        for(let i = 1; i < results.data.length; i++) {
          let curGames = results.data[i], 
              gameArry = [];

          for(let j = 0; j < curGames.length; j++) {
            if(curGames[j].length > 0) {
              gameArry.push(curGames[j]);
            }
          }

          // newobj[i].games = gameArry;
        }
        console.log(results.data);


        this.objGamesLegacy = newobj;
      }
    });
  }
}
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>
