export interface UserRegistrationInterface {
  username: string;
  password: string;
}

export interface UserLoginInterface {
  username: string;
  password: string;
}

export interface AuthTokensPair {
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: number;
  username: string;
  role: string;
  registeredAt: string;
  refreshToken: string | null;
}
