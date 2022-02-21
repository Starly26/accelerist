import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReduser from "./auth/UserSlice";

const rootReducer = combineReducers({
  user: userReduser,
});

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
