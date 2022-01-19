import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
  kit: {
    adapter: adapter(),
    target: '#svelte'
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        games: 'src/routes/games/_game.svelte'
      }
    })
  ]
};

export default config;
