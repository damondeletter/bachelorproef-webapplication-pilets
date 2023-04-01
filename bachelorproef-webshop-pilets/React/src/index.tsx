import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'bachelorproef-app-shell';
import { ProductPage } from './ProductPage';
import products from './mock/products';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  
  app.registerTile('Product', ({ piral }) => ( <ProductPage products={products} AddButton={({ item }) => <piral.Extension name="buy-button" params={item} /> } /> ))
}
