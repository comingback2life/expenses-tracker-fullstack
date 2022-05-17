import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  res:{
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
  reducers:{ //always plural
    isLoadingPending: (state)=>{
      state.isLoading = true;
    },
    setResponse : (state,action)=>{
      state.isLoading=false
      state.res= action.payload //argument that has been passed by different functions stays in payLoad,
     
    }
  }
})

const {actions,reducer} = userSlice;
export const {isLoadingPending,setResponse}= actions;
export default reducer;