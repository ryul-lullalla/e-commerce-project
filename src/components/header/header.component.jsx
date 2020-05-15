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

import { signOutStart } from '../../redux/user/user.actions';

import styled, { css } from 'styled-components';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={
              signOutStart
              // () => auth.signOut()
              // console.log('fired')
            }
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            {/* <div className="option" onClick={() => auth.signOut()}> */}
            SIGN IN
            {/* </div> */}
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
