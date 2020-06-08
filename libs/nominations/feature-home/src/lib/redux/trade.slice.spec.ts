import { tradeActions, tradeAdapter, tradeReducer } from './trade.slice';

describe('trade reducer', () => {
  it('should handle initial state', () => {
    const expected = tradeAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(tradeReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchTrades', () => {
    let state = tradeReducer(
      undefined,
      tradeActions.fetchTrades.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = tradeReducer(
      state,
      tradeActions.fetchTrades.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = tradeReducer(
      state,
      tradeActions.fetchTrades.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
