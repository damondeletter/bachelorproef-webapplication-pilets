import { PiletApi } from 'bachelorproef-app-shell';
import AddButton from './AddButton.vue';
import Cart from './Cart.vue';
import * as React from 'react';

interface AddButtonExtension {
  item: Object
}

export function setup(app: PiletApi) {

  app.setData('cart', []);

  const addToCart = (item) => {
    var cart = app.getData('cart');
    cart.push(item)
    app.setData('cart', cart);
  }

  app.registerExtension<AddButtonExtension>(
    'add-button', 
    app.fromVue(AddButton, { addToCart: addToCart})
  )

  app.registerPage("/cart", app.fromVue(Cart, { cart: app.getData('cart') }) );


}