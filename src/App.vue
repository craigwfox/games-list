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
    Papa.parse('https://craigwfox.com/assets/test-csv.csv', {
      download: true,
      delimiter: ',',
      newline: '\n',
      complete: results => {
        let newobj = {
          thead: [],
          trows: []
        };
        newobj.thead = results.data[0];

        for(let i = 1; i < results.data.length; i++) {
          newobj.trows.push(results.data[i])
        }

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
