import API from "../api";

export async function getProjects(lang) {
  try {
    const res = await API.get("/get-projects?lang=" + lang);
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function getProject(id) {
  try {
    const res = await API.get(`/get-project-properties?id=${id}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}
