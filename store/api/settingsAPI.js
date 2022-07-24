import API from "../api";

export async function getAppSettings(lang) {
  try {
    const res = await API.get(`/get-settings?lang=${lang}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}
