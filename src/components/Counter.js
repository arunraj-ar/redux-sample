import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { selectCounter } from "../store/selectors";
import {
  incrementCounter,
  decrementCounter,
  increaseCounter,
} from "../store/actions";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementHandler = () => {
    dispatch(decrementCounter());
  };
  const increaseHandler = (value) => {
    dispatch(increaseCounter(value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={() => increaseHandler(5)}>+5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
