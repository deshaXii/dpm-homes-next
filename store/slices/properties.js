import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  getProperties,
  getFeaturesSellUnits,
  getFeaturesRentUnits,
  addResidentialCashProperty,
  addResidentialInstallmentProperty,
  getPropertyById,
  addResidentialBothProperty,
  addResidentialRentProperty,
  addCommercialCashProperty,
  addCommercialInstallmentProperty,
  addCommercialRentProperty,
  addCommercialBothProperty,
  addAdministrativeCashProperty,
  addAdministrativeInstallmentProperty,
  addAdministrativeBothProperty,
  addAdministrativeRentProperty,
  getRelatedProperty,
} from "../api/propertiesAPI";

const initialState = {
  allProperties: [],
  property: {},
  related: [],
  homeSell: [],
  homeRent: [],
};

export const getPropertiesWithTpye = createAsyncThunk(
  "properties/getProperty",
  async ({ type, userToken, lang }) => {
    const responseData = await getProperties({ type, userToken, lang });
    return responseData;
  }
);
export const getHomepageSellUnits = createAsyncThunk(
  "properties/getFeaturesSellUnits",
  async ({locale, currency}) => {
    const responseData = await getFeaturesSellUnits({locale, currency});
    return responseData;
  }
);
export const getHomepageRentUnits = createAsyncThunk(
  "properties/getFeaturesRentUnits",
  async ({locale, currency}) => {
    const responseData = await getFeaturesRentUnits({locale, currency});
    return responseData;
  }
);

export const showProperty = createAsyncThunk(
  "properties/showProperty",
  async ({id, lang, currency}) => {
    const responseData = await getPropertyById({id, lang, currency});
    return responseData;
  }
);

export const showRelatedProperty = createAsyncThunk(
  "properties/showRelatedProperty",
  async ({ id, lang, currency }) => {
    const responseData = await getRelatedProperty({ id, lang, currency });
    return responseData;
  }
);

export const addResidentialCash = createAsyncThunk(
  "properties/add-residential-cash",
  async (data) => {
    const responseData = await addResidentialCashProperty(data);
    return responseData;
  }
);

export const addResidentialInstallment = createAsyncThunk(
  "properties/add-residential-installment",
  async (data) => {
    const responseData = await addResidentialInstallmentProperty(data);
    return responseData;
  }
);

export const addResidentialBoth = createAsyncThunk(
  "properties/add-residential-both",
  async (data) => {
    const responseData = await addResidentialBothProperty(data);
    return responseData;
  }
);

export const addResidentialRent = createAsyncThunk(
  "properties/add-residential-rent",
  async (data) => {
    const responseData = await addResidentialRentProperty(data);
    return responseData;
  }
);

export const addCommercialCash = createAsyncThunk(
  "properties/add-commercial-cash",
  async (data) => {
    const responseData = await addCommercialCashProperty(data);
    return responseData;
  }
);

export const addCommercialInstallment = createAsyncThunk(
  "properties/add-commercial-installment",
  async (data) => {
    const responseData = await addCommercialInstallmentProperty(data);
    return responseData;
  }
);

export const addCommercialBoth = createAsyncThunk(
  "properties/add-commercial-both",
  async (data) => {
    const responseData = await addCommercialBothProperty(data);
    return responseData;
  }
);

export const addCommercialRent = createAsyncThunk(
  "properties/add-commercial-rent",
  async (data) => {
    const responseData = await addCommercialRentProperty(data);
    return responseData;
  }
);

export const addAdministrativeCash = createAsyncThunk(
  "properties/add-administrative-cash",
  async (data) => {
    const responseData = await addAdministrativeCashProperty(data);
    return responseData;
  }
);

export const addAdministrativeInstallment = createAsyncThunk(
  "properties/add-administrative-installment",
  async (data) => {
    const responseData = await addAdministrativeInstallmentProperty(data);
    return responseData;
  }
);

export const addAdministrativeBoth = createAsyncThunk(
  "properties/add-administrative-both",
  async (data) => {
    const responseData = await addAdministrativeBothProperty(data);
    return responseData;
  }
);

export const addAdministrativeRent = createAsyncThunk(
  "properties/add-administrative-rent",
  async (data) => {
    const responseData = await addAdministrativeRentProperty(data);
    return responseData;
  }
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertiesWithTpye.fulfilled, (state, action) => {
        state.allProperties = action.payload.data;
      })
      .addCase(getHomepageSellUnits.fulfilled, (state, action) => {
        state.homeSell = action.payload.data;
      })
      .addCase(getHomepageRentUnits.fulfilled, (state, action) => {
        state.homeRent = action.payload.data;
      })
      .addCase(showProperty.fulfilled, (state, action) => {
        state.property = action.payload;
      })
      .addCase(showRelatedProperty.fulfilled, (state, action) => {
        state.related = action.payload;
      })
      .addCase(addResidentialCash.fulfilled, (state, action) => {})
      .addCase(addResidentialCash.rejected, (state, action) => {})
      .addCase(addResidentialInstallment.fulfilled, (state, action) => {})
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.properties,
          ...action.payload.properties,
        };
        return nextState;
      });
  },
});

export const selectProperties = (state) => state.properties;

export default propertiesSlice.reducer;
