import React from 'react';

import styled from 'styled-components';
import { SharedUiButton } from '@vakt/shared/ui-button';

/* eslint-disable-next-line */
export interface BfoetFeatureHomeProps {}

const StyledBfoetFeatureHome = styled.div`
  color: red;
`;

export const BfoetFeatureHome = (props: BfoetFeatureHomeProps) => {
  return (
    <StyledBfoetFeatureHome>
      <h1>Welcome to bfoet-feature-home!</h1>  
      <SharedUiButton> Click me </SharedUiButton>
    </StyledBfoetFeatureHome>
  );
};

export default BfoetFeatureHome;
