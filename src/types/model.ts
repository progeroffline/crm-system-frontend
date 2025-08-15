export type Status = 'работает' | 'ушла' | 'блок' | 'удалена';

export interface Questionnaire {
  vaginalMasturbationToys: boolean;
  vaginalMasturbationFingers: boolean;
  analMasturbationToys: boolean;
  analMasturbationFingers: boolean;
  sexWithMan: boolean;
  oralSexToy: boolean;
  squirtVideo: boolean;
  feet: boolean;
  peeVideo: boolean;
  periodVideo: boolean;
  minEnglish: boolean;
  notReadyFor: string;
  sexToys: string;
  customs: boolean;
  videoCalls: boolean;
}

export interface Model {
  id: number | null;
  avatar: string;
  fullName: string;
  ml: string;
  status: Status;
  mailing: boolean;
  questionnaire: Questionnaire;
}

export interface AssignedModel extends Omit<Model, 'questionnaire'> {
  total: number;
  forecast: number;
  registrationDate: string;
  superAdmin: string | null;
  topAdmin: string | null;
  admin: string | null;
  operator: string | null;
}

export type MarketingStatus = 'работает' | 'уволен' | 'отдыхает' | 'болеет';

export interface MarketingModel {
  id: number;
  fullName: string;
  status: MarketingStatus;
  hireDate: string;
  fireDate: string | null;
  workDays: number;
  reasonForLeaving: string | null;
  contactTelegram: string;
  location: string;
  trafficSource: string;
  source: string;
  administrator: string | null;
  referral: {
    fullName: string;
    id: number;
  } | null;
  superTopAdmin: string | null;
  topAdmin: string | null;
}

export type StaffRole = 'Супер админ' | 'Топ админ' | 'Администратор' | 'Оператор' | 'HR';

export interface StaffRatingModel {
  id: number;
  fullName: string;
  role: StaffRole;
  rating: number; // A number from 1 to 1000
}

export type LeavingType = 'По собственному' | 'Уволен' | 'Перевод';

export interface LeavingModel {
  id: number;
  fullName: string;
  hireDate: string;
  fireDate: string;
  workDays: number;
  leavingType: LeavingType;
  contactTelegram: string;
  location: string;
  superTopAdmin: string | null;
  topAdmin: string | null;
  administrator: string | null;
  translator: string | null; // Assuming translator is a new role
  balance: {
    current: number;
    previous: number;
    позапрошлый: number;
    total: number;
  };
}

export type UserRole =
  | 'superAdmin'
  | 'topAdmin'
  | 'admin'
  | 'operator'
  | 'hr'
  | 'translator'
  | 'user';

export interface UserModel {
  id: number;
  username: string;
  role: UserRole;
  lastLogin: string;
  balance: number;
}
