import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieStorageService from "../../services/CookieStorageService";
import { CompanyType } from "../../types";
import {
  getFavoriteCompanyThunk,
  getSuggestedCompaniesThunk,
} from "./CompanyThunk";

type InitialCompanyStateType = {
  companies: CompanyType[];
  favoritesCompanies: CompanyType[];
  suggestedCompanies: CompanyType[];
  pageSize: number;
  totalFavoriteCompany: number;
  currentFavoritePage: number;
  companyFavoriteCount: number;
  totalPages: number;
};

const initialState: InitialCompanyStateType = {
  companies: [],
  favoritesCompanies: [],
  suggestedCompanies: [],
  pageSize: 8,
  totalFavoriteCompany: 0,
  currentFavoritePage: 1,
  companyFavoriteCount: 0,
  totalPages: 1,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteCompanyThunk.fulfilled, (state, { payload }) => {
        state.favoritesCompanies = payload.items;
        state.currentFavoritePage = Number(payload.meta.currentPage);
        state.totalFavoriteCompany = payload.meta.totalItems;
        state.companyFavoriteCount = Number(payload.meta.itemCount);
        state.totalPages = payload.meta.totalPages;
        // return state;
      })
      .addCase(getSuggestedCompaniesThunk.fulfilled, (state, { payload }) => {
        state.suggestedCompanies = payload.items;
        return state;
      });
  },
});

export const actions = {
  ...companySlice.actions,
  getFavoriteCompanyAction: getFavoriteCompanyThunk,
  getSuggestedCompaniesAction: getSuggestedCompaniesThunk,
};

export default companySlice.reducer;
