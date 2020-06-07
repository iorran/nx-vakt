import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BfoetFeatureHomeProps {}

const StyledBfoetFeatureHome = styled.div`
  color: pink;
`;

export const BfoetFeatureHome = (props: BfoetFeatureHomeProps) => {
  return (
    <StyledBfoetFeatureHome>
      <h1>Welcome to bfoet-feature-home!</h1>

      <ul>
        <li>
          <Link to="/">bfoet-feature-home root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the bfoet-feature-home root route.</div>}
      />
    </StyledBfoetFeatureHome>
  );
};

export default BfoetFeatureHome;
