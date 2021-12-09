<script>
  import { page } from '$app/stores';
</script>

<header class="site-header">
  <h1>🎮 Games list</h1>
  <nav>
    <a class:active={$page.path === '/'} sveltekit:prefetch href="/">Home</a>
    <a class:active={$page.path === '/about'} sveltekit:prefetch href="/about">About</a>
  </nav>
</header>
