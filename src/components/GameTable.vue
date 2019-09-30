<template>
  <div class="game-table">
    <h2>{{tableName}}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="value in tableData.thead">
            {{ value }}
          </th>
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
    tableData: Object
  }
}
</script>

<style scoped>
</style>
