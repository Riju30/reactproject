import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import * as Api from "../../helper/api/User"

export const register = createAsyncThunk(
    "auth/register",
    async({formData,toast},{rejectWithValue})=>{
        try {
            const res = await Api.signUp(formData);
            toast.success("Register Successfully");
            // navigate()
            return res.data
            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, toast },{rejectWithValue}) => {
      try {
        const response = await Api.signIn(formValue);
        toast.success("Login Successfully");
        // navigate("/");
        return response.data;
      } catch (err) {
       return rejectWithValue(err.response.data)
      }
    }
  );

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        error:"",
        loading: false
    },
    reducers:{

    },
    extraReducers:{
        [register.pending]: (state, action) => {
            state.loading = true;
          },
          [register.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload;
          },
          [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },

          [login.pending]: (state, action) => {
            state.loading = true;
          },
          [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload;
          },
          [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
    }
})

export default AuthSlice.reducer