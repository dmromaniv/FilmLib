import axios from "axios";
import { constantsAPI } from "./constantsAPI";

const axiosInstance = axios.create({
  baseURL: constantsAPI.baseURL,
  params: {
    apikey: constantsAPI.apikey,
  },
});

export const getFilmsByTitle = async (searchQuery, page = 1) => {
  const { data } = await axiosInstance.get("", {
    params: {
      s: searchQuery,
      page,
    },
  });

  return data;
};

export const getFilmInfoById = async (filmId) => {
  const { data } = await axiosInstance.get("", {
    params: {
      i: filmId,
    },
  });

  return data;
};
