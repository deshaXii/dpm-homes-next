import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { send_feedback } from "../api/feedbackAPI";
import { toast } from "react-toastify";

const initialState = {
  message: "",
};

export const sendFeedback = createAsyncThunk(
  "feedback/sendFeedback",
  async (data) => {
    const responseData = await send_feedback(data);
    return responseData;
  }
);

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendFeedback.fulfilled, (state, action) => {
        state.message = action.payload.message;
        toast.success(state.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.feedback,
          ...action.payload.feedback,
        };
        return nextState;
      });
  },
});

export const selectFeedback = (state) => state.feedback;

export default feedbackSlice.reducer;
