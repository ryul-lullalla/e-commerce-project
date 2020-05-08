import React from 'react';
import { connect } from 'react-redux';
import { adjustItemQuantity } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, adjustItemQuantity }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <CustomButton onClick={() => adjustItemQuantity(item, +1)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  adjustItemQuantity: (item, adjust) =>
    dispatch(adjustItemQuantity(item, adjust), console.log(item, adjust)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
