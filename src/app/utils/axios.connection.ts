import axios from "axios";

const axiosConnection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default axiosConnection;
