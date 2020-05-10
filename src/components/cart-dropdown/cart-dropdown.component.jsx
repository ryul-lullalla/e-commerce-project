import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { store, persistor } from '../../redux/store';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(store.getState());

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <Link to="/checkout">
            <CustomButton onClick={() => dispatch(toggleCartHidden())}>
              GO TO CHECKOUT
            </CustomButton>
          </Link>
        </>
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
