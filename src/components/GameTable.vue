<template>
  <div class="game-table">
    <h2>{{tableName}}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="tableTh in tableData.thead">
            {{ tableTh }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tableTr in tableData.trows">
          <td v-for="tableTd in tableTr">
            {{ tableTd }}
          </td>
        </tr>
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
