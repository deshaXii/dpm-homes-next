import API from "../api";

export async function get_all_events() {
  try {
    const res = await API.get("/get-events");
    return await res.data.data;
  } catch (err) {
    return err;
  }
}

export async function get_event({ id, lang }) {
  console.log(id);
  try {
    const res = await API.get(`/get-event?id=${id}&lang=${lang}`);
    return await res.data.data;
  } catch (err) {
    return err;
  }
}

export async function register_event({ event, name, email, phone, lang }) {
  console.log(event, name, email, phone);
  try {
    const res = await API.post(`/register-event?lang=${lang}`, {
      event,
      name,
      email,
      phone,
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}
