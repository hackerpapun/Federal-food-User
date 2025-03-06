import axios from "axios";

const API_BASE_URL = "http://192.168.29.45:5001/api";
// const API_BASE_URL = "http://192.168.29.29:4000/api/v1";
// const API_BASE_URL = "https://backend-1-fw6b.onrender.com";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const apiCaller = ({ uri, method = "GET", data = {}, token }) => {
  return httpClient({
    method,
    url: uri,
    headers: {
      "Content-Type": "application/json", // Default content type
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    data,
  }).then((response) => response.data);
};

const deleteApiCaller = ({ uri, token }) => {
  return httpClient
    .delete(uri, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    })
    .then((response) => response.data);
};

export const HttpClient = {
  apiCaller,
  API_BASE_URL,
  deleteApiCaller,
};
