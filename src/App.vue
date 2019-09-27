<template>
  <div id="app">
    <GamesLegacy msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { XlsCsvParser } from 'vue-xls-csv-parser';
import GamesLegacy from './components/GamesLegacy.vue'

export default {
  name: 'app',
  components: {
    XlsCsvParser,
    GamesLegacy
  }
}
</script>

<style>
</style>
