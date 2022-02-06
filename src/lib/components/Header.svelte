<script>
  import { page } from '$app/stores';
</script>

<header class="site-header">
  <img
    class="sh__mark"
    width="50"
    src="/images/snes-controller-vert.svg"
    alt=""
  />
  <h1 class="sh__title">Games list</h1>
  <nav class="sh__nav">
    <a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/"
      >Stats</a
    >
    <a
      class:active={$page.url.pathname === '/games'}
      sveltekit:prefetch
      href="/games">Games</a
    >
    <a
      class:active={$page.url.pathname === '/about'}
      sveltekit:prefetch
      href="/about">About</a
    >
  </nav>
</header>
