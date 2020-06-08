import React from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

/* eslint-disable-next-line */
export interface SharedUiHeaderProps {}

const StyledSharedUiHeader = styled.div`
  color: pink;
  span {
    margin: 8px;
  }
`;

export const SharedUiHeader = (props: SharedUiHeaderProps) => {
  return (
    <StyledSharedUiHeader>
      <span><Link to="/"> BFOET</Link></span> 
      <span><Link to="/nominations"> Nominations </Link></span> 
      <span><Link to="/trades"> Trades</Link></span>  
    </StyledSharedUiHeader>
  );
};

export default SharedUiHeader;
