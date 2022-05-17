import {configureStore} from '@reduxjs/toolkit';
const intialState={

}
const store = configureStore({
  reducer:{
    test:0
  }
})
export default store;