<template>
  <div id="app">
    <h1>Games Played</h1>
    <GameList listName="Games Played 2020" listYear="2020" listData="./csv/Gaming - Games to Play - 2020_Played.csv"></GameList>
    <!-- <GameList listName="Games Played 2019" listYear="2019" listData="./csv/Gaming - Games to Play - 2019_Played.csv"></GameList> -->
    <!-- <GameList listName="Games Played 2018" listYear="2018" listData="./csv/Gaming - Games to Play - 2018_Played.csv"></GameList> -->
    <!-- <GameList listName="Games Played Legacy" listYear="< 2018" listData="./csv/Gaming - Games to Play - Played_Legacy.csv"></GameList> -->
  </div>
</template>

<script>
import GameList from './components/GameList.vue';

export default {
  name: 'app',
  components: {
    GameList
  }
}
</script>

<style>
:root {
  --clr-dark: #36393B;
  --clr-medium: #616668;
  --clr-primary: #2B879E;
  --clr-light: #98D9B6;
  --clr-light-alt: #F2E8C4;
  --clr-link: #3EC9A7;
  --ff-main: 'Roboto', sans-serif;
  --ff-cond: 'Roboto Condensed', sans-serif;
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

  font-family: var(--ff-main);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--clr-dark);
  font-family: var(--ff-cond);
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
