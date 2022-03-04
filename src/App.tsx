import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import { Layout } from "./components/Layout";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelect";
import { AuthPage } from "./pages/AuthPage";
import { CorporateProfilePage } from "./pages/CorporateProfilePage";
import { DashboardPage } from "./pages/DashboardPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProspectsPage } from "./pages/ProspectsPage";
import { SavedSearchPage } from "./pages/SavedSearchPage";
import { SearchPage } from "./pages/SearchPage";
import AppRoutes from "./route/route";
import CookieStorageService from "./services/CookieStorageService";
import { actions } from "./store/auth/UserSlice";

function App() {
  const isAuthorization = useAppSelector((state) => state.user.isAuthorized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = CookieStorageService.getToken();
    if (!token) {
      dispatch(actions.logout());
    }
  }, [isAuthorization]);
  return (
    <Routes>
      <Route path={AppRoutes.Authorization} element={<AuthPage />} />
      <Route path={AppRoutes.HomePage} element={<Layout />}>
        <Route path={AppRoutes.Dashboard} element={<DashboardPage />} />
        <Route path={AppRoutes.Search} element={<SearchPage />} />
        <Route
          path={AppRoutes.CorporateProfile}
          element={<CorporateProfilePage />}
        />
        <Route
          path={AppRoutes.CorporateProfileID}
          element={<CorporateProfilePage />}
        />
        <Route path={AppRoutes.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoutes.Prospects} element={<ProspectsPage />} />
        <Route
          path={AppRoutes.AccountingServices}
          element={<SavedSearchPage />}
        />
        <Route
          path={AppRoutes.AccountingServicesId}
          element={<SavedSearchPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
