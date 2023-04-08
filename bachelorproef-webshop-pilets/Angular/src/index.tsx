import { PiletApi } from 'bachelorproef-app-shell';
import { TileModule } from './TileModule';
import { TileComponent } from './TileComponent';

/**
 * Shows an API extension using Angular components.
 */
export function setup(piral: PiletApi) {
  piral.defineNgModule(TileModule);

  piral.registerTile(piral.fromNg(TileComponent), {
    initialColumns: 2,
    initialRows: 2,
  });
}