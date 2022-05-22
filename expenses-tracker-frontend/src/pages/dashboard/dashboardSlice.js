import { createSlice } from "@reduxjs/toolkit";

const initialState={
  expenses:[],

  res:{
    status:"",
    message:"",
  },
  isLoading:false,
}
const dashboardSlice = createSlice({
  name:"dashboard",
  initialState,
  reducers:{
    requestPending: (state) => {
      state.isLoading=true;
    }
  }
})