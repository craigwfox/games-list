<script context="module">
  export const prerender = true;
</script>

<script>
  import { seo } from '$lib/store.js';
</script>

<svelte:head>
  <title>Home {seo.title}</title>
</svelte:head>

<h1 id="recent-games">Recent games</h1>

<section aria-label="Games feed">
  <div class="game-filters">
    <div class="form">
      <label for="sortYear">Sort by year</label>
      <select name="sortYear" id="sortYear">
        <option value="all" selected>All</option>
        <option value="">2021</option>
      </select>
    </div>
    <div class="form">
      <label for="sortConsole">Sort by console</label>
      <select name="sortConsole" id="sortConsole">
        <option value="all" selected>All</option>
        <option value="">SNES</option>
      </select>
    </div>
    <div class="form">
      <label for="sortRating">Sort by rating</label>
      <select name="sortRating" id="sortRating">
        <option value="all" selected>All</option>
        <option value="">bad</option>
      </select>
    </div>
  </div>
  <div class="game-wrapper">...</div>
</section>
