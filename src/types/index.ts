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
  imported?: boolean;
  teamId: string;
  role: string;
  linkedinLink: string;
  avatarKey: string;
  loggedInAt?: Date;
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

export type FavoriteCompaniesType = {
  id: string;
  companyId: string;
  userId: string;
};

export type CompanyType = {
  id: string;
  zoomInfoId: string;
  name: string;
  logo: string;
  ticker: string;
  parentCompany: string;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: number;
  country: string;
  continent: string;
  productsBrandDescription: string;
  descriptionList: string;
  revenueRange: string;
  employeeRange: number;
  twitterHandle: null;
  socialMediaUrls: null;
  competitors: null;
  subUnitIndustries: null;
  primaryIndustry: [string];
  industries: null;
  revenue: string;
  employeeCount: number;
  annualContributions: null;
  cashContributions: null;
  inKindContributions: null;
  employeeContributions: null;
  parentId: null;
  parentName: null;
  type: null;
  sdgGoals: [];
  genders: null;
  income: null;
  age: null;
  ethnicity: null;
  nonprofit: null;
  purchase: null;
  affiliation: null;
  brands: null;
  interests: null;
  typesOfInvestment: null;
  errorLoadZoomInfo: null;
  charitablePartners: [];
  statusZoomInfo: string;
  loadZoomInfoDate: null;
  errorLoadZoomInfoDate: null;
  partnershipLink: null;
  employeeEngagementOpportunities: boolean;
  similarCompanies: [string];
  favoriteCompanies: [FavoriteCompaniesType];
  score: number;
  like: boolean;
  crsFocus: [];
};

export type MetaType = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
};

export type CompanyResponseDto = {
  items: [CompanyType];
  meta: MetaType;
};

export type FilterType = {
  q?: string;
  revenueMin?: number;
  revenueMax?: number;
  gender?: string;
};
export type ValuesFilterType = {
  revenue: number[];
};

export type CompanyRequestType = {
  page: number;
  limit: number;
  filter?: string;
};

export type SaveListType = {
  id: string;
  name: null;
  filters: {};
  prospectsAvailable: number;
  createdAt: Date;
  updatedAt: Date;
  lastAuthor: UserAuthTypeDto;
};

export type SavedListResponseDto = {
  items: SaveListType[];
  meta: MetaType;
};
