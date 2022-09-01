import API from "../api";

export async function getAppServices(lang) {
  try {
    const res = await API.get(`/get-services?lang=${lang}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}
