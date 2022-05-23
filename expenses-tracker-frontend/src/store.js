import {configureStore} from '@reduxjs/toolkit';
import userReducer from './components/register/userSlice'
import DashBoardReducer from './pages/dashboard/dashboardSlice';

const store = configureStore({
  reducer:{
    user: userReducer,
    dashboard:DashBoardReducer
  }
})
export default store;