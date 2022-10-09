import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./slices/auth";
import contactReducer from "./slices/contact";
import propertiesReducer from "./slices/properties";
import countriesReducer from "./slices/countries";
import projectsReducer from "./slices/projects";
import filterReducer from "./slices/filter";
import clientReducer from "./slices/client";
import wishlistSlice from "./slices/wishlist";
import feedbackSlice from "./slices/feedback";
import settingsSlice from "./slices/settings";
import servicesSlice from "./slices/services";
import currencySlice from "./slices/currency";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      contact: contactReducer,
      properties: propertiesReducer,
      countries: countriesReducer,
      projects: projectsReducer,
      filter: filterReducer,
      client: clientReducer,
      wishlist: wishlistSlice,
      feedback: feedbackSlice,
      settings: settingsSlice,
      services: servicesSlice,
      currency: currencySlice
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
