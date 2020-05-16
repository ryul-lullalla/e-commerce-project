import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import WithSpinner from '../../components/with-spinner/with-spinner.components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentSigningState } from '../../redux/user/user.selectors';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentSigningState,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner,
)(SignInAndSignUpPage);

const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  padding-top: 60px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    width: unset;
    padding-top: 40px;
  }
`;
