import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";

const Usecards = () => {
  const AxiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const { data: Cart = [],isLoading: loading, refetch } = useQuery({
    queryKey: ["Cards", user?.email],
    queryFn: async () => {
      try {
        const res = await AxiosPublic.get(`/Cards?email=${user?.email}`);
        // console.log(res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching cart data:", error);
        throw new Error("Failed to fetch cart data");
      }
    },
  });

  return [Cart, refetch, loading];
};

export default Usecards;
