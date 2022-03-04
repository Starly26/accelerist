import { createSlice } from "@reduxjs/toolkit";
import { CompanyType, SaveListType } from "../../types";
import {
  getFavoriteCompanyThunk,
  getAllCompaniesThunk,
  getLikeCompanyThunk,
  getDislikeCompanyThunk,
  getCompanyThunk,
  getSavedListThunk,
} from "./CompanyThunk";

type InitialCompanyStateType = {
  companies: CompanyType[];
  company: CompanyType | null;
  favoritesCompanies: CompanyType[];
  suggestedCompanies: CompanyType[];
  pageSize: number;
  totalFavoriteCompany: number;
  currentFavoritePage: number;
  companyFavoriteCount: number;
  totalFavoritePages: number;
  totalCompany: number;
  currentCompanyPage: number;
  companyCount: number;
  totalPages: number;
  savedList: SaveListType[] | null;
};

const initialState: InitialCompanyStateType = {
  companies: [],
  savedList: null,
  company: null,
  favoritesCompanies: [],
  suggestedCompanies: [],
  pageSize: 8,
  totalFavoriteCompany: 0,
  currentFavoritePage: 1,
  companyFavoriteCount: 0,
  totalFavoritePages: 1,
  totalCompany: 0,
  currentCompanyPage: 1,
  companyCount: 0,
  totalPages: 0,
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
        state.totalFavoritePages = payload.meta.totalPages;
      })
      .addCase(getAllCompaniesThunk.fulfilled, (state, { payload }) => {
        state.companies = payload.items;
        state.totalCompany = payload.meta.totalItems;
        state.currentCompanyPage = Number(payload.meta.currentPage);
        state.companyCount = Number(payload.meta.itemCount);
        state.totalPages = payload.meta.totalPages;
      })
      .addCase(getCompanyThunk.fulfilled, (state, { payload }) => {
        state.company = payload;
        return state;
      })
      .addCase(getLikeCompanyThunk.fulfilled, (state, { payload }) => {
        const company = state.companies.find(
          (company) => company.id === payload
        );
        if (!company) {
          return;
        }
        console.log("like");

        company.like = true;
      })
      .addCase(getDislikeCompanyThunk.fulfilled, (state, { payload }) => {
        const company = state.companies.find(
          (company) => company.id === payload
        );
        if (!company) {
          return;
        }
        console.log("dislike");

        company.like = false;
      });
  },
});

export const actions = {
  ...companySlice.actions,
  getFavoriteCompanyAction: getFavoriteCompanyThunk,
  getAllCompaniesAction: getAllCompaniesThunk,
  getLikeCompanyAction: getLikeCompanyThunk,
  getDislikeCompanyAction: getDislikeCompanyThunk,
  getCompanyAction: getCompanyThunk,
};

export default companySlice.reducer;
