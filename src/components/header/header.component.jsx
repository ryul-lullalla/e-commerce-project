import React from 'react';
import { connect } from 'react-redux';
// connect is HOC which let us modify our component to have access to things related to redux
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
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
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // state is the root reducer
  currentUser: state.user.currentUser,
  //first currentUser is the variable wanted to be used as a prop in this component
  // currentUser comes up with dot notation is a defined userReducer
  // state is root reducer so if we go to root-reducer it points  "user: userReducer"
  // and user-reducer returns an object that has a key name of "currentUser"
  // therefore, value what "state.user.currentUser" points at is a value of a key from an object which get returned by user-reducer
  // what suppose reducer should to operate
});

export default connect(mapStateToProps)(Header);
