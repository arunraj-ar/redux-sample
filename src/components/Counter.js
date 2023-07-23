import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { selectCounter, selectShowCounter } from "../store/selectors";
import {
  incrementCounter,
  decrementCounter,
  increaseCounter,
  toggleCounter,
  setCounter,
} from "../store/actions";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const show = useSelector(selectShowCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementHandler = () => {
    dispatch(decrementCounter());
  };
  const increaseHandler = (value) => {
    dispatch(increaseCounter(value));
  };
  const setHandler = (e) => {
    dispatch(setCounter(e.target.value ? e.target.value : 0));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <input type="number"  disabled={!show} className={classes.value} onChange={setHandler} value={show ? counter : " "}/>
      <div>
        <button onClick={incrementHandler} disabled={!show}>
          +
        </button>
        <button onClick={() => increaseHandler(5)} disabled={!show}>
          +5
        </button>
        <button onClick={decrementHandler} disabled={!show}>
          -
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
