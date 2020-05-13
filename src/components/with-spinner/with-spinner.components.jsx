// this spinner makes the application to render corresponding component based on the boolean value that has beeb passed on by Parents components
// this is particularly regards with asynchronous of JS/React as this component prevent getting errors especially refreshong the page that takes data
// by props from parents components;
// Spinner components will rendered as the data needed for another components has not been passed into since the asynchronous of javascript when
// especially refreshing certain rendered page. As a result, as data has beeing fetched into coreesponding component who are required them,
// the error doesnt occur beacuse of spinner-components will be rendered instead during the period of fetching

import React from 'react';

import styled from 'styled-components';

// const WithSpinner = (WrappedComponent) => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     console.log(isLoading);
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log(isLoading);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
