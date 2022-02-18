import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/LocalStorageService";
import { UserAuthTypeDto } from "../../types";

const initialState = {
  email: "",
  isAuthorized: false,
} as UserAuthTypeDto;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<string>) {
      state.isAuthorized = true;
      state.email = payload;
      console.log("login", payload);
    },
    logout(state) {
      LocalStorageService.resetToken();
      state.isAuthorized = false;
      console.log("logout");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
