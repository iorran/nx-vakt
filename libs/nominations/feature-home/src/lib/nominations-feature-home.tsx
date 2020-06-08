import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NominationsFeatureHomeProps {}

const StyledNominationsFeatureHome = styled.div`
  color: blue;
`;

export const NominationsFeatureHome = (props: NominationsFeatureHomeProps) => {
  return (
    <StyledNominationsFeatureHome>
      <h1>Welcome to nominations-feature-home!</h1>
    </StyledNominationsFeatureHome>
  );
};

export default NominationsFeatureHome;
 