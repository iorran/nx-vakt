import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BfoetFeatureHomeProps {}

const StyledBfoetFeatureHome = styled.div`
  color: blue;
`;

export const BfoetFeatureHome = (props: BfoetFeatureHomeProps) => {
  return (
    <StyledBfoetFeatureHome>
      <h1>Welcome to bfoet-feature-home!</h1> 
      
    </StyledBfoetFeatureHome>
  );
};

export default BfoetFeatureHome;
