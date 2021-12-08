<script>
  import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Rubik:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <style lang="scss">
    /* ====---------------====
			Support
		=======---------------= */
    @import '../scss/support/variables';
    @import '../scss/support/reset';
    @import '../scss/support/mixins';

    /* ====---------------====
			Type
		=======---------------= */
    @import '../scss/type/lists';
    @import '../scss/type/headings';
    @import '../scss/type/misc';

    /* ====---------------====
			Bits
		=======---------------= */
    @import '../scss/bits/game-fitlering';

    /* ====---------------====
			Layout
		=======---------------= */
    @import '../scss/layout/structure';
    @import '../scss/layout/header';
    @import '../scss/layout/footer';
    @import '../scss/layout/game-feed';
  </style>
</svelte:head>

<Header />

<main class="main">
  <slot />
</main>

<footer class="site-footer">
  <p>
    &copy; 2021 <a href="https://craigwfox.com">Craig Fox</a>
    <img src="./images/fox-icon.svg" alt="Illustration of fox head" />
    Built using SvelteKit
  </p>
</footer>
