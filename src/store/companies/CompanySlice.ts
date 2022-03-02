import { createSlice } from "@reduxjs/toolkit";
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
};

const initialState: InitialCompanyStateType = {
  companies: [],
  favoritesCompanies: [],
  suggestedCompanies: [],
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteCompanyThunk.fulfilled, (state, { payload }) => {
        state.favoritesCompanies = payload.items;
        return state;
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
