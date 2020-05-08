// refactoring of combining between addItemToCart and removeItemFromCart: adjusting quantity of selected item actions into one action

export const adjustItemQuantityInCart = (
  cartItems,
  cartItemBundleForAdjust,
) => {
  const { item, adjustment } = cartItemBundleForAdjust;
  // return [...cartItems, { ...cartItemBundleToAdjust, quantity: 1 }];

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id,
  );

  if (existingCartItem) {
    if (existingCartItem.quantity + adjustment === 0) {
      return cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: 1 } : cartItem,
      );
    } else {
      return cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + adjustment }
          : cartItem,
      );
    }
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

// firing action for add quantity for selected item individually
// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToAdd.id,
//   );
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem,
//     );
//   }

//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

// firing action for substract quantity for selected item individually
// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id,
//   );
//   if (existingCartItem.quantity === 1) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToRemove.id
//         ? { ...cartItem, quantity: 1 }
//         : cartItem,
//     );
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem,
//   );
// };
