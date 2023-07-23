import { DECREMENT, INCREASE, INCREMENT, SET, TOGGLE } from "./constants";

export const incrementCounter = () => ({
  type: INCREMENT,
});
export const decrementCounter = () => ({
  type: DECREMENT,
});
export const increaseCounter = (value) => ({
  type: INCREASE,
  value: value,
});

export const setCounter = (value) =>({
  type: SET,
  value: value
})
export const toggleCounter = () => ({
  type: TOGGLE,
});
