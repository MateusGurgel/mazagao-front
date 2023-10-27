import axios, { AxiosError } from "axios";

import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

const TokenKey = "token";

interface errorResponse {
  timeStamp: string;
  message: string;
  details: string;
}

async function getScoreboard() {
  return await api
    .get<User[]>("/users/scoreboard")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return [];
    });
}

async function logout() {
  Cookies.remove(TokenKey);
}

async function getMyProfile() {
  return await api
    .get<User>("/users/me")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
}

async function login(email: string, password: string) {
  var body = {
    email: email,
    password: password,
  };

  const response = await api
    .post<Token>("/auth/signin", body)
    .then((response) => {
      const token = response.data;
      Cookies.set(TokenKey, token.accessToken, {
        expires: new Date(token.expiration),
      });
      return response.data;
    })
    .catch((error) => {
      const axiosError = error as AxiosError<errorResponse>;
      const errorResponse = axiosError.response?.data;
      if (errorResponse) {
        return errorResponse;
      }
    });

  return response;
}

interface RegisterResponse {
  username: string;
  email: string;
  rank: string;
  score: Number;
  deaths: Number;
  kills: Number;
}

async function register(email: string, password: string, username: string) {
  var body = {
    email: email,
    password: password,
    username: username,
  };

  const response = await api
    .post<RegisterResponse>("/auth/register", body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const axiosError = error as AxiosError<errorResponse>;
      const errorResponse = axiosError.response?.data;
      if (errorResponse) {
        return errorResponse;
      }
    });

  return response;
}

var mazagaoServices = {
  login,
  logout,
  register,
  getScoreboard,
  getMyProfile,
  TokenKey,
};
export default mazagaoServices;
