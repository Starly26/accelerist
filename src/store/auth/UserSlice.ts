import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieStorageService from "../../services/CookieStorageService";
import { ResponseDto, UserAuthTypeDto } from "../../types";
import { loginUserThunk, registerUserThunk } from "./UserThunk";

const initialState = {
  email: "",
  isAuthorized: false,
} as UserAuthTypeDto;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      CookieStorageService.resetToken();
      state.isAuthorized = false;
      console.log("logout");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state = payload.user;
        CookieStorageService.setToken(payload.accessToken);
        console.log("login", payload);
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state = payload.user;
        CookieStorageService.setToken(payload.accessToken);
        console.log("register", payload);
      });
  },
});

export const actions = {
  ...userSlice.actions,
  login: loginUserThunk,
  register: registerUserThunk,
};
export default userSlice.reducer;
