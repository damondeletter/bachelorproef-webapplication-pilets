import { fromSvelte} from 'piral-svelte/convert';

import Page from './Page.svelte';
import type { PiletApi} from "bachelorproef-app-shell";

export function setup(app: PiletApi) {
  app.registerPage('/svelte', fromSvelte(Page));
}