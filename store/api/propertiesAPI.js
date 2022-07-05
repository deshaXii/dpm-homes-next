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
    const res = await API.post(`/add-residential-installment`, { ...data, "images[]": data.images }, {
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

export async function addResidentialBothProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-residential-both`, { ...data, "images[]": data.images }, {
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

export async function addResidentialRentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-residential-rent`, { ...data, "images[]": data.images }, {
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

export async function addCommercialCashProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-commercial-cash`, { ...data, "images[]": data.images }, {
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

export async function addCommercialInstallmentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-commercial-installment`, { ...data, "images[]": data.images }, {
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
export async function addCommercialBothProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-commercial-both`, { ...data, "images[]": data.images }, {
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
export async function addCommercialRentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-commercial-rent`, { ...data, "images[]": data.images }, {
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
export async function addAdministrativeCashProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-administrative-cash`, { ...data, "images[]": data.images }, {
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

export async function addAdministrativeInstallmentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-administrative-installment`, { ...data, "images[]": data.images }, {
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

export async function addAdministrativeBothProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-administrative-both`, { ...data, "images[]": data.images }, {
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

export async function addAdministrativeRentProperty(data) {
  try {
    let token = jsCookies.getItem("userToken");
    const res = await API.post(`/add-administrative-rent`, { ...data, "images[]": data.images }, {
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
