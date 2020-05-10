import CartActionTypes from './cart.types';
import { adjustItemQuantityInCart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        // hidden: !action.payload,
      };
    case CartActionTypes.ADJUST_ITEM:
      return {
        ...state,
        cartItems: adjustItemQuantityInCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };
    // case CartActionTypes.ADD_ITEM:
    //   return {
    //     ...state,
    //     cartItems: addItemToCart(state.cartItems, action.payload),
    //   };
    // case CartActionTypes.REMOVE_ITEM:
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCart(state.cartItems, action.payload),
    //   };
    default:
      return state;
  }
};

export default cartReducer;
