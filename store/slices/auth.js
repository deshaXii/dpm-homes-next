import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  authLogin,
  getAuthInformation,
  userLogout,
  createAccount,
  forgetPassword,
  resetPassword,
  getMyProperties
} from "../api/authAPI";

const initialState = {
  user: null,
  properties: []
};

export const login = createAsyncThunk("auth/login", async (data) => {
  const responseData = await authLogin(data);
  return responseData;
});

export const getUserInfo = createAsyncThunk("auth/get-info", async (token) => {
  const responseData = await getAuthInformation(token);
  return responseData;
});

export const getUserProperties = createAsyncThunk("auth/get-my-properties", async (token) => {
  const responseData = await getMyProperties(token);
  return responseData;
});

export const sendForgetPasswordCode = createAsyncThunk("auth/forgetPassword", async (email) => {
  const responseData = await forgetPassword(email);
  return responseData;
});

export const changeMyPassword = createAsyncThunk("auth/resetPassword", async (data) => {
  const responseData = await resetPassword(data);
  return responseData;
});

export const register = createAsyncThunk("auth/register", async (data) => {
  const responseData = await createAccount(data);
  return responseData;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const responseData = await userLogout(token);
  return responseData;
});


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload;
        } else {
          state.user = null;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserProperties.fulfilled, (state, action) => {
        state.properties = action.payload;
      })
      .addCase(sendForgetPasswordCode.fulfilled, (state, action) => {
        // state.user = null;
      })
      .addCase(changeMyPassword.fulfilled, (state, action) => {
        // state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
      })

      .addCase(HYDRATE, (state, action) => {
        const nextState = {
          ...state.auth,
          ...action.payload.auth,
        };
        return nextState;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectUserProperties = (state) => state.auth.properties;

export default authSlice.reducer;
