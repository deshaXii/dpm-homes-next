import axios from "axios";

const API = axios.create({
  baseURL: "https://dpmhomes.com/api"
});

export default API;
