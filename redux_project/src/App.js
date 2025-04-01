import logo from './logo.svg';
import './App.css';
import {increment, decrement, incrementByAmount}from "./counterSlice";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state)=>state.counter.count);
  // 구독하는 행위.
  // 카운터 객체안의 카운트를 가져오겠다.
  const dispatch = useDispatch();

  
  return (
    <>
    <h1> Counter:{count}</h1>
    <button onClick={(e)=>dispatch(increment())}>increment</button>
    <button onClick={(e)=>dispatch(decrement())}>decrement</button>
    <button onClick={(e)=>dispatch(incrementByAmount(5))}>increment By 5</button>
    </>
  );
}

export default App;