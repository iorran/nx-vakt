import React, { useCallback } from 'react';

import styled from 'styled-components';
import { SharedUiButton } from '@vakt/shared/ui-button';
import { useDispatch } from 'react-redux';
import { tradeActions, TradeEntity } from '@vakt/nominations/shared/util-redux';
import { SalesGrid } from './sales-grid/sales-grid';

/* eslint-disable-next-line */
export interface NominationsFeatureHomeProps {}

const StyledNominationsFeatureHome = styled.div`
  color: blue;
`;

export const NominationsFeatureHome = (props: NominationsFeatureHomeProps) => {
  const dispatch = useDispatch();

  const addTrade = useCallback(
    () => { 
      const trade: TradeEntity = {id: Math.random()};
      dispatch(tradeActions.addTrade(trade));
    },
    [dispatch]
  );

  return (
    <StyledNominationsFeatureHome>
      <h1>Welcome to nominations-feature-home!</h1>
      <SharedUiButton onClick={addTrade}> Add new trade </SharedUiButton>
      <SalesGrid />
    </StyledNominationsFeatureHome>
  );
};

export default NominationsFeatureHome;
 