<script>
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/styles.scss';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Rubik:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <script defer data-domain="games.craigwfox.com" src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<Header />

<main
  class={$page.url.pathname.indexOf('/games/') === 0
    ? 'main main--games'
    : 'main'}
>
  <slot />
</main>

<footer class="site-footer">
  <p>
    &copy; {new Date().getFullYear()}
    <a href="https://craigwfox.com">Craig Fox</a>
    <img src="/images/fox-icon.svg" alt="Illustration of fox head" />
    Built using SvelteKit
  </p>
</footer>
