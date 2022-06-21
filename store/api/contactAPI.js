import API from "../api";
import jsCookies from "js-cookies";

export async function sendMessage(data) {
  try {
    const res = await API.post("/contact", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}
