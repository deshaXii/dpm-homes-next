import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getProjects, getProject } from "../api/projectsAPI";

const initialState = {
  allProjects: [],
  project: {},
};

export const getAllProjects = createAsyncThunk("projects/getProjects", async (lang) => {
  const responseData = await getProjects(lang);
  return responseData;
});

export const getCurrentProject = createAsyncThunk("projects/getProject", async ({id, lang}) => {
  const responseData = await getProject({id, lang});
  return responseData;
});

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.allProjects = action.payload.data;
      })
      .addCase(getCurrentProject.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.projects,
          ...action.payload.projects,
        };
        return nextState;
      });
  },
});

export const selectProjects = (state) => state.projects;

export default projectsSlice.reducer;
