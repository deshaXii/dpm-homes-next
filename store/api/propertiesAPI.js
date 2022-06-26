import API from "../api";
import jsCookies from "js-cookies";

export async function getProperties({ type, userToken }) {
  try {
    if (userToken) {
      const res = await API.get(`/get-property?type=${type}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return await res.data;
    } else {
      const res = await API.get(`/get-property?type=${type}`);
      return await res.data;
    }
  } catch (err) {
    return err;
  }
}

export async function getPropertyById(id) {
  try {
    const res = await API.get(`/show-property?id=${id}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function addResidentialCashProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(
      `/add-residential-cash`,
      { ...data, "images[]": data.images },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function addResidentialInstallmentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-residential-installment`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}
