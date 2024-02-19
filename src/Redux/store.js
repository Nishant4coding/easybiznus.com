import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

// import users from "./Features/user/userSlice";
// import counter from "./Features/counter/coutersSlice";

// import vendor from "./Features/vendor/vendorSlice";
// import onboard from "@/Redux/Features/onboardee/onboardeeSlice";
// import product from "./Features/product/productSlice";
import auth from "./Features/auth/authSlice";
const combinedReducer = combineReducers({
  auth,
  // product,
  // counter,
  // users,

  // vendor,
  // onboard
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log("Inside Hydrate");
    const nextState = {
      ...state, // use previous state
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    console.log({ nextState });
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });