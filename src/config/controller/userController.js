import { HttpClient } from "./httpClient";

export const loginUser = async (data) => {
  return HttpClient.apiCaller({
    uri: "/auth/login",
    method: "POST",
    data,
  });
};

export const signupUser = async (data) => {
  return HttpClient.apiCaller({
    uri: "/auth/sign-up",
    method: "POST",
    data,
  });
};
export const getCategory = async (data) => {
  return HttpClient.apiCaller({
    uri: "/categories",
    method: "GET",
    data,
  });
};



const UserController = {
  // Auth
  loginUser,
  signupUser,
  
};

export default UserController;
