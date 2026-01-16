import { store } from "./store";

// Dispatch actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// Read state
console.log(store.getState());
