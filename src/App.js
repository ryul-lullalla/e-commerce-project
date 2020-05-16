import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentDidMount() {
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);
  //   //     //check if our database has been updated or not
  //   //     userRef.onSnapshot((snapShot) => {
  //   //       setCurrentUser({
  //   //         currentUser: {
  //   //           id: snapShot.id,
  //   //           ...snapShot.data(),
  //   //         },
  //   //       });
  //   //     });
  //   //   }
  //   //   setCurrentUser(userAuth);
  //   //   // addCollectionAndDocuments(
  //   //   //   'collections',
  //   //   //   collectionsArray.map(({ title, items }) => ({ title, items })),
  //   //   // );
  //   // });

  //   checkUserSession();
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}

`;
