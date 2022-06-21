import API from "../api";
import jsCookies from "js-cookies";

export async function updateInformation(data) {
  try {
    const res = await API.post(
      "/update-profile",
      {
        name: data.name,
        password: data.password,
        phone: data.phone,
        address: data.address,
        city: data.city,
        country: data.country,
        about: data.about,
        facebook: data.facebook,
        twitter: data.twitter,
        google: data.google,
        linkedin: data.linkedin,
        image: data.image,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jsCookies.getItem("userToken")}`,
        },
      }
    );
    return await res.data;
  } catch (err) {
    return err;
  }
}
