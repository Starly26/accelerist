import { actions as AuthActions } from "./auth/UserSlice";
import { actions as CompanyActions } from "./companies/CompanySlice";
import { actions as SavedListActions } from "./SavedList/SavedListSlice";

const actions = {
  auth: AuthActions,
  company: CompanyActions,
  savedList: SavedListActions,
};
export default actions;
