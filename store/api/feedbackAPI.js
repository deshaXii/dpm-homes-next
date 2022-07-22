import API from "../api";

export async function send_feedback(data) {
  try {
    const res = await API.post("/feedback", {
      score: data.score,
      review: data.review,
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}
