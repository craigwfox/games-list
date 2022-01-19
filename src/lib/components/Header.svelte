<script>
  import { page } from '$app/stores';
</script>

<header class="site-header">
  <h1>🎮 Games list</h1>
  <nav>
    <a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a>
    <a class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about">About</a>
    <a class:active={$page.url.pathname === '/games'} sveltekit:prefetch href="/games">Games</a>
  </nav>
</header>
