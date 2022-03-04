import {
  CompanyRequestType,
  // FilterCompanyRequestType,
  UserAuthType,
} from "../types";
import { apiAuth, instanse } from "./instanse";

export const loginUser = (user: UserAuthType) => {
  return apiAuth.post("auth/sign_in/", user);
};

export const registerUser = (user: UserAuthType) => {
  return apiAuth.post("auth/sign_up/", user);
};

export const getAllCompanies = (params: CompanyRequestType) => {
  return instanse.get(
    `companies?page=${params.page}&limit=${params.limit}${params.filter}`
  );
};

export const getCompany = (id: string) => {
  return instanse.get(`companies/${id}`);
};

export const getFavoritesCompanies = (params: CompanyRequestType) => {
  return instanse.get(
    `companies/favorites?page=${params.page}&limit=${params.limit}`
  );
};

export const getLikeCompany = (companyId: string) => {
  return instanse.get(`companies/${companyId}/like`);
};

export const getDislikeCompany = (companyId: string) => {
  return instanse.get(`companies/${companyId}/dislike`);
};

export const getSavedList = (params: CompanyRequestType) => {
  return instanse.get(`saved-list?page=${params.page}&limit=${params.limit}`);
};
