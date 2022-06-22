import axios from "axios";

const API = axios.create({
  baseURL: "https://admin.dpmhomes.com/api/"
});

export default API;
