import API from "../api";

export async function getCountries(lang) {
  try {
    const res = await API.get(`/get-countries?lang=${lang}`);
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function getGovernorates(data) {
  try {
    const res = await API.get(
      `/get-governorates?country_id=${data.activeCountry}&lang=${
        data.locale ? data.locale : "en"
      }`
    );
    return await res.data;
  } catch (err) {
    return err;
  }
}
