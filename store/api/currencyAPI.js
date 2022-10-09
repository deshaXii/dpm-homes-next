import Axios from "axios";

export async function getUserIP() {
  fetch("https://api.db-ip.com/v2/free/self") //api for the get request
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
// export async function getUserLocationByIP(ip) {
//   try {
//     const res = await Axios.get(`http://ip-api.com/json/${ip}`);
//     return await res.data;
//   } catch (err) {
//     return err;
//   }
// }
