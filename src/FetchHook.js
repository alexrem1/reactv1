import axios from "axios";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

export const useGetCat = () => {
  const {
    data: catFact,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    // queryFn: async () =>
    // (await axios.get("https://catfact.ninja/fact")).data.fact,
    //or
    queryFn: async () => {
      return axios
        .get("https://catfact.ninja/fact")
        .then((res) => res.data.fact);
    },
  });
  console.log(catFact);

  const refetchData = () => {
    refetch();
  };

  return { catFact, refetchData, isLoading, isError };
};
