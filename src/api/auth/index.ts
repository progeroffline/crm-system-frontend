import { AxiosInstance } from 'axios';
import { AuthTokensPair, User, UserLoginInterface, UserRegistrationInterface } from './interfaces';
import { AuthApiEndpoints } from './endpoints';

export class AuthApiInterface {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async register(
    userRegistrationData: UserRegistrationInterface
  ): Promise<{ data: User; status: number }> {
    const { data, status } = await this.axiosInstance.post<User>(
      AuthApiEndpoints.REGISTER,
      userRegistrationData
    );
    return { data, status };
  }

  async login(
    userLoginData: UserLoginInterface
  ): Promise<{ data: AuthTokensPair; status: number }> {
    const { data, status } = await this.axiosInstance.post<AuthTokensPair>(
      AuthApiEndpoints.LOGIN,
      userLoginData
    );
    return { data, status };
  }

  async logout() {
    const { data } = await this.axiosInstance.post(AuthApiEndpoints.LOGOUT);
    return data;
  }

  async refresh() {
    const { data } = await this.axiosInstance.post(AuthApiEndpoints.REFRESH);
    return data;
  }

  async user(): Promise<{ data: User; status: number }> {
    const { data, status } = await this.axiosInstance.get<User>(AuthApiEndpoints.USER);
    return { data, status };
  }
}
