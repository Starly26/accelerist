import { createSlice } from "@reduxjs/toolkit";
import CookieStorageService from "../../services/CookieStorageService";
import { UserAuthTypeDto } from "../../types";
import { loginUserThunk, registerUserThunk } from "./UserThunk";

const initialState: Partial<UserAuthTypeDto> = {
  email: "",
  isAuthorized: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      CookieStorageService.resetToken();
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        CookieStorageService.setToken(payload.accessToken);
        return payload.user;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        CookieStorageService.setToken(payload.accessToken);
        return payload.user;
      });
  },
});

export const actions = {
  ...userSlice.actions,
  login: loginUserThunk,
  register: registerUserThunk,
};

export default userSlice.reducer;
