import React, { useEffect, useMemo } from 'react';

import styled from 'styled-components';

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { tradeSelectors, tradeActions } from '../redux/trade.slice';

/* eslint-disable-next-line */
export interface SalesGridProps {}

const StyledSalesGrid = styled.div`
  color: green;
`;

export const SalesGrid = (props: SalesGridProps) => {
  const dispatch = useDispatch();  
  const state = useSelector(tradeSelectors.getTradeState, shallowEqual);
  const trades = useMemo(() => tradeSelectors.selectAll(state), [state]);
  const total = useMemo(() => tradeSelectors.selectTotal(state), [state]); 

  useEffect(() => { 
    dispatch(tradeActions.fetchTrades());
  }, [dispatch]);

  return (
    <StyledSalesGrid>
      <h1>Total: {total}</h1>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>#</th>
          </tr>
        </thead>

        <tbody> 
            {trades && trades.map(trade => <tr key={trade.id}><td>{trade.id}</td></tr>)} 
        </tbody>
      </table>
    </StyledSalesGrid>
  );
};

export default SalesGrid;
