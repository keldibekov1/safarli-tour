import { api } from "@/services/api";

export const getTours = async () => {
  const res = await api.get("/tours");
  return res.data;
};

export const getTourById = async (id: string) => {
  const res = await api.get(`/tours/${id}`);
  return res.data;
};
