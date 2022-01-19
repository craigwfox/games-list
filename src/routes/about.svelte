<script context="module">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<script>
  import { seo } from '$lib/store.js';
</script>

<svelte:head>
  <title>About {seo.title}</title>
</svelte:head>

<div class="content">
  <h1>About this here games list</h1>
</div>

<style>
</style>
