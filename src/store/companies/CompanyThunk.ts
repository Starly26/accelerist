import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCompanies,
  getCompany,
  getDislikeCompany,
  getFavoritesCompanies,
  getLikeCompany,
  getSavedList,
} from "../../api/api";
import {
  CompanyRequestType,
  CompanyResponseDto,
  CompanyType,
  RejectThunkType,
  SavedListResponseDto,
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

export const getAllCompaniesThunk = createAsyncThunk<
  CompanyResponseDto,
  CompanyRequestType,
  RejectThunkType
>("company/getAllCompanies", async (params) => {
  const response = await getAllCompanies(params);
  return response.data;
});

export const getCompanyThunk = createAsyncThunk<
  CompanyType,
  string,
  RejectThunkType
>("company/getCompany", async (id) => {
  const response = await getCompany(id);
  return response.data;
});

export const getLikeCompanyThunk = createAsyncThunk<
  string,
  string,
  RejectThunkType
>("company/getLikeCompany", async (params) => {
  getLikeCompany(params);

  return params;
});

export const getDislikeCompanyThunk = createAsyncThunk<
  string,
  string,
  RejectThunkType
>("company/getDislikeCompany", async (params) => {
  getDislikeCompany(params);
  return params;
});

export const getSavedListThunk = createAsyncThunk<
  SavedListResponseDto,
  CompanyRequestType,
  RejectThunkType
>("company/getSavedList", async (params) => {
  const response = await getSavedList(params);
  return response.data;
});
