import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const TRADE_FEATURE_KEY = 'trade';

/*
 * Update these interfaces according to your requirements.
 */
export interface TradeEntity {
  id: number;
}

export interface TradeState extends EntityState<TradeEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const tradeAdapter = createEntityAdapter<TradeEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const fetchTrades = createAsyncThunk(
  'trade/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getTrades()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialTradeState: TradeState = tradeAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const tradeSlice = createSlice({
  name: TRADE_FEATURE_KEY,
  initialState: initialTradeState,
  reducers: {
    addTrade: tradeAdapter.addOne,
    removeTrade: tradeAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrades.pending, (state: TradeState) => {
      state.loadingStatus = 'loading';
    });
    builder.addCase(
      fetchTrades.fulfilled,
      (state: TradeState, action: PayloadAction<TradeEntity[]>) => {
        tradeAdapter.addMany(state, action.payload);
        state.loadingStatus = 'loaded';
      }
    );
    builder.addCase(fetchTrades.rejected, (state: TradeState, action) => {
      state.loadingStatus = 'error';
      state.error = action.error.message;
    });
  },
});

/*
 * Export reducer for store configuration.
 */
export const tradeReducer = tradeSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(tradeActions.addTrade([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const tradeActions = {
  ...tradeSlice.actions,
  fetchTrades,
};

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectTradeEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const tradeSelectors = {
  getTradeState: (rootState: unknown): TradeState =>
    rootState[TRADE_FEATURE_KEY],
  ...tradeAdapter.getSelectors(),
};
