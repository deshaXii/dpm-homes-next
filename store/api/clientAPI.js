import API from "../api";

export async function getClientDetails(id) {
  try {
    const res = await API.get(`/view-profile?id=${id}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}
