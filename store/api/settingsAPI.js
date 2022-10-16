import API from "../api";

export async function getAppSettings({lang, userIp}) {
  try {
    const res = await API.get(`/get-settings?lang=${lang}&userIp=${userIp}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}
