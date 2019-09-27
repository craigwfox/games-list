<template>
  <div class="game-table">
    <h2>{{tableName}}</h2>
    <table>
      <thead>
        <tr>
          <!-- <th v-for="value in testing">
            {{ value }}
          </th> -->
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GamesLegacy',
  props: {
    tableName: String,
    tableCsv: Object
  }
}
</script>

<style scoped>
</style>
