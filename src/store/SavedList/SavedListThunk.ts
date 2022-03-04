import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSavedList } from "../../api/api";
import {
  CompanyRequestType,
  RejectThunkType,
  SavedListResponseDto,
} from "../../types";

// 1 - response 2 - request 3 -reject

export const getSavedListThunk = createAsyncThunk<
  SavedListResponseDto,
  CompanyRequestType,
  RejectThunkType
>("company/getSavedList", async (params) => {
  const response = await getSavedList(params);
  console.log(response.data);

  return response.data;
});
