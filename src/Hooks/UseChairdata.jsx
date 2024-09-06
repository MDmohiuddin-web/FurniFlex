import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";




const UseChairdata = () => {
  const axiosPublic=UseAxiosPublic()
  const { data: chairs = [], isLoading: loading,refetch }= useQuery({
    queryKey: ["chairs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/chairs");
      return res.data;
    },
  });
  return [chairs, loading,refetch];
};

export default UseChairdata;
