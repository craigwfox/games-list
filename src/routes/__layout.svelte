<script>
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
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
	<p>&copy; Craig Fox 🦊 2021</p>
</footer>
