import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "https://furniflux-server.vercel.app",
});

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
