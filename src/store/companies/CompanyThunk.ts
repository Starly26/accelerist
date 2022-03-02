import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoritesCompanies, getSuggestedCompanies } from "../../api/api";
import {
  CompanyRequestType,
  CompanyResponseDto,
  RejectThunkType,
} from "../../types";

// 1 - response 2 - request 3 -reject

export const getFavoriteCompanyThunk = createAsyncThunk<
  CompanyResponseDto,
  CompanyRequestType,
  RejectThunkType
>("company/getFavoriteCompany", async (params) => {
  const response = await getFavoritesCompanies(params);
  return response.data;
});

export const getSuggestedCompaniesThunk = createAsyncThunk<
  CompanyResponseDto,
  number,
  RejectThunkType
>("company/getSuggestedCompanies", async (limit) => {
  const response = await getSuggestedCompanies(limit);
  return response.data;
});
