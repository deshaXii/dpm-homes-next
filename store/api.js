import axios from "axios";

const API = axios.create({
  baseURL: "https://admin.luxuryaqar.com/api/"
});

export default API;
