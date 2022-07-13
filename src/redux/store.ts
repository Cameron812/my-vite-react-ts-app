import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../components/Counter/counterSlice';
import { pokemonApi } from '../components/Pokemon/PokemonApi';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
