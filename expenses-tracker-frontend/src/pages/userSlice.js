import createSlice from '@reduxjs/toolkit';

const initialState = {
  response:{
    status:"",
    message:""
  },
  isLoading:false,
  user:{

  }
}
const userSlice = createSlice({
  name:'user',
  initialState,
  reducer:{
    isLoadingPending: (state)=>{
      state.isLoading = true
    },
    setResponse : (state,action)=>{
      state.response= action.payLoad //argument that has been passed by different functions stays in payLoad
    }
  }
})