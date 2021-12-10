import svelte from 'rollup-plugin-svelte';
import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  },
  preprocess: sveltePreprocess(),
  plugins: [
    svelte({
      // tell svelte to handle mdsvex files
      extensions: ['.svelte', '.svx', '.md'],
      preprocess: mdsvex({ extensions: ['.svx', '.md'] })
    })
  ]
};

export default config;
