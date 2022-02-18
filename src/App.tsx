import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Layout } from "./components/Layout";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OrganizationProfilePage } from "./pages/OrganizationProfilePage";
import { ProspectsPage } from "./pages/ProspectsPage";
import { SavedSearchPage } from "./pages/SavedSearchPage";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/authorization" element={<AuthPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route
          path="organization_profile"
          element={<OrganizationProfilePage />}
        />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="prospects" element={<ProspectsPage />} />
        <Route path="accounting_services" element={<SavedSearchPage />} />
        <Route path="*" element={NotFoundPage} />
      </Route>
    </Routes>
  );
}

export default App;
