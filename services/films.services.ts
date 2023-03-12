import axios from "axios";

import { constantsAPI } from "./constantsAPI";
import {
  FilmDataResponseDTO,
  FilmsPreviewResponseDTO,
} from "@/model/filmsResponseDTO";

const axiosInstance = axios.create({
  baseURL: constantsAPI.baseURL,
  params: {
    apikey: constantsAPI.apikey,
  },
});

export const getFilmsByTitle = async (
  searchQuery: string,
  page = 1
): Promise<FilmsPreviewResponseDTO> => {
  const { data } = await axiosInstance.get("", {
    params: {
      s: searchQuery,
      page,
    },
  });
  return data;
};

export const getFilmInfoById = async (
  filmId: string
): Promise<FilmDataResponseDTO> => {
  const { data } = await axiosInstance.get("", {
    params: {
      i: filmId,
    },
  });
  return data;
};
