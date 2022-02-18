import { UserAuthType } from "../types";
import { apiAuth } from "./instanse";

export const loginUser = (user: UserAuthType) => {
  return apiAuth.post("auth/sign_in/", user);
};

export const registerUser = (user: UserAuthType) => {
  return apiAuth.post("auth/sign_up/", user);
};
