import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  adjustItemQuantity,
} from '../../redux/cart/cart.actions';

import styled from 'styled-components';

const CheckoutItem = ({ cartItem, clearItem, adjustItemQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => adjustItemQuantity(cartItem, -1)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => adjustItemQuantity(cartItem, +1)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  adjustItemQuantity: (item, adjust) =>
    dispatch(adjustItemQuantity(item, adjust)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
