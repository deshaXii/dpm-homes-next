import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./slices/auth";
import contactReducer from "./slices/contact";
import propertiesReducer from "./slices/properties";
import countriesReducer from "./slices/countries";
import projectsReducer from "./slices/projects";
import filterReducer from "./slices/filter";
import clientReducer from "./slices/client";

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
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
