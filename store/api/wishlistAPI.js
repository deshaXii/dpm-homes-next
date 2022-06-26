import API from "../api";
import jsCookies from "js-cookies";

export async function updateWishlist(id) {
  try {
    const res = await API.get(`/update-wishlist?id=${id}`, {
      headers: {
        Authorization: `Bearer ${jsCookies.getItem("userToken")}`,
      },
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}
