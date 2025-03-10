import { HttpClient } from "./httpClient";

export const loginUser = async (data) => {
  return HttpClient.apiCaller({
    uri: "/auth/login",
    method: "POST",
    data,
  });
};

export const registerUser = async (data) => {
  return HttpClient.apiCaller({
    uri: "/auth/register",
    method: "POST",
    data,
  });
};

export const logoutUser = async () => {
  return HttpClient.apiCaller({
    uri: "/auth/logout",
    method: "DELETE",
  });
};

export const resetPassword = async (data) => {
  return HttpClient.apiCaller({
    uri: "/auth/reset-password",
    method: "POST",
    data,
  });
};

const UserController = {
  loginUser,
  registerUser,
  logoutUser,
  resetPassword,
};

export default UserController;
