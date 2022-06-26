import API from "../api";
import jsCookies from "js-cookies";

export async function authLogin(user) {
  try {
    const res = await API.post("/login", {
      email: user.email,
      password: user.password,
    });
    if (res.data.success) {
      jsCookies.setItem("userToken", res.data.data.token);
    }
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function createAccount(user) {
  try {
    const res = await API.post("/register", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      type: user.type,
      account_status: user.account_status,
    });
    if (res.data.success) {
      jsCookies.setItem("userToken", res.data.data.token);
    }
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function forgetPassword(email) {
  try {
    const res = await API.post("/forget-password", {
      email: email,
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function resetPassword(data) {
  try {
    const res = await API.post("/reset-password", {
      email: data.email,
      token: data.code,
      new_password: data.password,
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function getAuthInformation(userToken) {
  try {
    const res = await API.get("/get-info", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function getMyProperties(userToken) {
  try {
    const res = await API.get("/my-properties", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function userLogout(userToken) {
  try {
    const res = await API.get("/logout", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    jsCookies.removeItem("userToken");
    return await res.data;
  } catch (err) {
    return err;
  }
}
