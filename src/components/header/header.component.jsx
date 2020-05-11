import React from 'react';
import { connect } from 'react-redux';
// connect is HOC which let us modify our component to have access to things related to redux
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {/* <div className="option" onClick={() => auth.signOut()}> */}
            SIGN IN
            {/* </div> */}
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   // state is the root reducer
//   currentUser,
//   hidden,
//   //first currentUser is the variable wanted to be used as a prop in this component
//   // currentUser comes up with dot notation is a defined userReducer
//   // state is root reducer so if we go to root-reducer it points  "user: userReducer"
//   // and user-reducer returns an object that has a key name of "currentUser"
//   // therefore, value what "state.user.currentUser" points at is a value of a key from an object which get returned by user-reducer
//   // what suppose reducer should to operate
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
