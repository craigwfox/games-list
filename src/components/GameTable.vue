<template>
  <div class="game-table">
    <h2>{{tableName}}</h2>

    <div class="game-list-nav">
      <button v-for="gameconsole in tableData" :value="gameconsole.id" :key="gameconsole.id" v-on:click="gameListActive = gameconsole.id">{{gameconsole.name}}</button>
    </div>

    <div class="game-list">
      <section v-for="gameconsole in tableData" :value="gameconsole.id" :key="gameconsole.id">

        <h3 v-show="gameListActive === gameconsole.id">{{gameconsole.name}}</h3>
        <article v-show="gameListActive === gameconsole.id" v-for="game in gameconsole.games" :key="game">
          <img src="../assets/placeholder-thumb.jpg" alt="">
          <h4>{{game}}</h4>
          <ul>
            <li><strong>Year Released:</strong> 1984-04-21</li>
            <li><strong>Year Played:</strong> Legacy</li>
            <li><strong>Developer:</strong> Nintendo</li>
          </ul>
        </article>

      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GamesLegacy',
  props: {
    tableName: String,
    tableData: Object
  },
  data () {
    return {
      gameListActive: null,
    }
  }
}
</script>

<style scoped>
  .game-table {
    flex-grow: 1;
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
    padding: 1rem 1rem;

    background: var(--clr-dark);
    border: 0;
    border-bottom: 0.1rem solid var(--clr-link);

    cursor: pointer;
    line-height: 1;
    color: var(--clr-link);
  }

  .game-list-nav button:last-child {
    border-bottom: 0;
  }

  .game-list {
    grid-area: list;

    padding: 1rem 2rem 2rem;

    border-top: 0.3rem solid var(--clr-dark);
  }

  .game-list ul {
    margin: 0;
    padding: 0;

    list-style-type: none;

    transition: max-height .1s ease-in-out;
  }

  .game-list li {
    font-size: 1.1rem;
    line-height: 1.3;
  }
</style>
