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
