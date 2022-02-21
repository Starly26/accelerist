import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../api/api";
import { RejectThunkType, ResponseDto, UserAuthType } from "../../types";

// 1 - response 2 - request 3 -reject

export const loginUserThunk = createAsyncThunk<
  ResponseDto,
  UserAuthType,
  RejectThunkType
>("user/login", async (user) => {
  const response = await loginUser(user);
  return response.data;
});

export const registerUserThunk = createAsyncThunk<
  ResponseDto,
  UserAuthType,
  RejectThunkType
>("user/register", async (user: UserAuthType) => {
  const response = await registerUser(user);
  return response.data;
});
