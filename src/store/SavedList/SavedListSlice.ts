import { createSlice } from "@reduxjs/toolkit";
import { SaveListType } from "../../types";
import { getSavedListThunk } from "./SavedListThunk";

type InitialSavedListType = {
  savedList: SaveListType[] | null;
  pageSize: number;
  totalItems: number;
  itemCount: number;
  totalPages: number;
  currentPage: number;
};

const initialState: InitialSavedListType = {
  savedList: null,
  pageSize: 10,
  totalItems: 0,
  itemCount: 0,
  totalPages: 1,
  currentPage: 1,
};

const saveListSlice = createSlice({
  name: "saveList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedListThunk.fulfilled, (state, { payload }) => {
      state.savedList = payload.items;
      state.totalPages = payload.meta.totalPages;
      state.currentPage = Number(payload.meta.currentPage);
      state.itemCount = payload.meta.itemCount;
      state.totalItems = payload.meta.totalItems;
    });
  },
});

export const actions = {
  ...saveListSlice.actions,
  getSavedListAction: getSavedListThunk,
};

export default saveListSlice.reducer;
