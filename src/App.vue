<template>
  <div id="app">
    <h1>Games Lists</h1>
    <GameTable tableName="Games Legacy"></GameTable>
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
      objGamesLegacy: {'dataobj': 'data'}
    }
  },
  mounted() {
    this.objGamesLegacy = {
      'mount': 'mounted'
    };

    Papa.parse('./assets/games-played-legacy.csv', {
      complete: function(results) {
        window.console.log(results);

        this.objGamesLegacy = {
          'parse': 'parsed'
        };
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
