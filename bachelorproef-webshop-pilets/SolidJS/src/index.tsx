import { PiletApi } from 'bachelorproef-app-shell';
import { Tile } from './Tile';
import { fromSolid } from 'piral-solid/convert';
import { SolidExtension } from './SolidExtension';


export function setup(piral: PiletApi) {
  piral.registerTile(fromSolid(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
  piral.registerPage('/solid', fromSolid(SolidExtension));
  piral.registerExtension('solid', fromSolid(SolidExtension));
}