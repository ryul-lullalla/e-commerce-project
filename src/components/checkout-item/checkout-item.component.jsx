import React from 'react';

import { connect } from 'react-redux';

import {
  clearItemFromCart,
  adjustItemQuantity,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, adjustItemQuantity }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => adjustItemQuantity(cartItem, -1)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => adjustItemQuantity(cartItem, +1)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  adjustItemQuantity: (item, adjust) =>
    dispatch(adjustItemQuantity(item, adjust)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
