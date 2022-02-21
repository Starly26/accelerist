import { RootState } from "../store/store";

export type UserAuthType = {
  email: string;
  password: string;
};

export type UserAuthTypeDto = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAuthorized: boolean;
  imported?: false;
  teamId: string;
  role: string;
  linkedinLink: string;
  avatarKey: null;
};

export type ResponseDto = {
  accessToken: string;
  user: UserAuthTypeDto;
};

export interface DefaultRejectValue {
  message?: string[] | string;
  statusCode?: number;
  error?: string;
}

export type RejectThunkType<T = DefaultRejectValue> = {
  rejectValue: T;
  state: RootState;
};
