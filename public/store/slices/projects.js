import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getProjects } from "../api/projectsAPI";

const initialState = {
  allProjects: [],
};

export const getAllProjects = createAsyncThunk("projects/getProjects", async () => {
  const responseData = await getProjects();
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
