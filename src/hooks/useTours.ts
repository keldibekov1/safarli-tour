import { useQuery } from "@tanstack/react-query";
import { getTourById, getTours } from "@/services/tour.service";

export const useTours = () => {
  return useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};


export const useTour = (id?: string) => {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: () => getTourById(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};