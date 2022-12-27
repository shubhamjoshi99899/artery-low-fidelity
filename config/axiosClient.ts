import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const post = async (apiURL: string, data: any, params?: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      params,
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const noAuthPost = async (apiURL: string, data: any) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
export const postForm = async (apiURL: string, data: any, options?: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.post(`${URL}/${apiURL}`, data, {
    ...options,
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const postLogin = async (apiURL: string, data: any) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const get = async (apiURL: string, params?: any, options?: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    ...options,
    params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const noAuthGet = async (apiURL: string, params?: any) => {
  return axios.get(`${URL}/${apiURL}`);
};

export const put = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.put(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteAxios = async (apiURL: string, params?: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.delete(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
    data: params,
  });
};
