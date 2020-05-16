import React from 'react';

import styled from 'styled-components';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 80px;
  @media screen and (max-width: 800px) {
    padding: 80px 0 0 0;
  }
`;
export default HomePage;
