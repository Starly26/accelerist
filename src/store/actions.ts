import { actions as AuthActions } from "./auth/UserSlice";
import { actions as CompanyActions } from "./companies/CompanySlice";

const actions = {
  auth: AuthActions,
  company: CompanyActions,
};
export default actions;
