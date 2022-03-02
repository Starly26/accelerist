import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/UserSlice";
import companyReducer from "./companies/CompanySlice";

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
});

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
