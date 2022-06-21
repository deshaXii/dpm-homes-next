import API from "../api";

export async function getProjects() {
  try {
    const res = await API.get('/get-projects');
    return await res.data;
  } catch (err) {
    return err;
  }
}
