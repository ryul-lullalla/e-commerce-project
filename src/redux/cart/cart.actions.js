import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const adjustItemQuantity = (item, adjust) => ({
  type: CartActionTypes.ADJUST_ITEM,
  payload: {
    item: item,
    adjustment: adjust,
  },
});

// combined of addItem and removeItem actions into one action as a result of refactoring
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

// individually defined as an action of add quantity the item in cart and checkout page
// export const addItem = (item) => ({
//   type: CartActionTypes.ADD_ITEM,
//   payload: item,
// });

// individually defined as an action of substracting quantity the item in cart and checkout page
// export const removeItem = (item) => ({
//   type: CartActionTypes.REMOVE_ITEM,
//   payload: item,
// });

// export default toggleCartHidden;

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
