import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../redux/store';
interface CounterState {
  value: number;
}
const initialState: CounterState = { value: 0 };

const fetchAmount = (amount: number): Promise<number> => {
  return new Promise((resolve) => setTimeout(() => resolve(amount), 1000));
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    const res = await fetchAmount(amount);
    return res;
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  }
});
export const selectCount = (state: RootState) => state.counter.value;
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export const incrementAfterTimeout =
  (amount: number) => (dispatch: AppDispatch) => {
    setTimeout(() => dispatch(incrementByAmount(amount)), 1000);
  };
export default counterSlice.reducer;
