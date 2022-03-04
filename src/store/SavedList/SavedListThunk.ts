import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSavedList, getSingleSavedList } from "../../api/api";
import {
  CompanyRequestType,
  RejectThunkType,
  SavedListResponseDto,
  SaveListType,
} from "../../types";

// 1 - response 2 - request 3 -reject

export const getSavedListThunk = createAsyncThunk<
  SavedListResponseDto,
  CompanyRequestType,
  RejectThunkType
>("saveList/getSavedList", async (params) => {
  const response = await getSavedList(params);

  return response.data;
});

export const getSingleSavedListThunk = createAsyncThunk<
  SaveListType,
  string,
  RejectThunkType
>("saveList/getSingleList", async (id) => {
  const response = await getSingleSavedList(id);
  return response.data;
});
