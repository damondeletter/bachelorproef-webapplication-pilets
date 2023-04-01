import * as React from 'react';
import type { PiletApi } from 'bachelorproef-app-shell';
import { ProductPage } from './ProductPage';
import products from './mock/products';

export function setup(app: PiletApi) {
  
  app.registerTile('Product', ({ piral }) => ( <ProductPage products={products} AddButton={({ item }) => <piral.Extension name="buy-button" params={item} /> } /> ))
}
