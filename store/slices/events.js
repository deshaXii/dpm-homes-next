import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { get_all_events, get_event } from "../api/eventsAPI";

const initialState = {
  events: [],
  event: {}
};

export const getAllEvents = createAsyncThunk(
  "events/getEvents",
  async () => {
    const responseData = await get_all_events();
    return responseData;
  }
);
export const getEvent = createAsyncThunk(
  "events/getEvent",
  async ({id, lang}) => {
    const responseData = await get_event({id, lang});
    return responseData;
  }
);

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.event = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.events,
          ...action.payload.events,
        };
        return nextState;
      });
  },
});

export const selectEvents = (state) => state.events;

export default eventsSlice.reducer;
