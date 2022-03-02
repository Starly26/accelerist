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
import { AdvancedPage } from "./pages/SearchPage/AdvancedPage";
import CookieStorageService from "./services/CookieStorageService";
import { actions } from "./store/auth/UserSlice";

function App() {
  const isAuthorization = useAppSelector((state) => state.user.isAuthorized);
  console.log("isAuthorization", isAuthorization);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = CookieStorageService.getToken();
    console.log("effect", token);
    if (!token) {
      dispatch(actions.logout());
    } else {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorization]);
  return (
    <Routes>
      <Route path="/authorization" element={<AuthPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/advanced" element={<AdvancedPage />} />
        <Route path="corporate_profile" element={<CorporateProfilePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="prospects" element={<ProspectsPage />} />
        <Route path="accounting_services" element={<SavedSearchPage />} />
        <Route path="*" element={NotFoundPage} />
      </Route>
    </Routes>
  );
}

export default App;
