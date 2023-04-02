import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'bachelorproef-app-shell';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/solid', Page);

  app.registerMenu(() => <Link to="/solid">Solid</Link>);
  
}
