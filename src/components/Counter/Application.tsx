import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import {
  decrement,
  increment,
  incrementAfterTimeout,
  incrementAsync,
  incrementByAmount,
  reset,
  selectCount
} from './counterSlice';

const Counter = () => {
  const [amount, setAmount] = React.useState('0');
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>
        Increment amount
      </button>
      <button
        onClick={() => dispatch(incrementAfterTimeout(Number(amount) || 0))}
      >
        Increment timeout
      </button>
      <button onClick={() => dispatch(incrementAsync(Number(amount) || 0))}>
        Increment Async
      </button>
    </div>
  );
};

export default Counter;
