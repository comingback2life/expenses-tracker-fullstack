import axios from 'axios';
const rootUrl= 'http://localhost:8000/api/v1';
const userApi = rootUrl+"/user";
const userLogin= rootUrl+'/user/login';

export const postRegister =  userData =>{
  try{
 return axios.post(userApi,userData);
   
  }catch(error){
    return{
      status:"Error",
      message: error.message,
    };
  }
}
export const postLogin =  userData =>{
  try{
 return axios.post(userLogin,userData);
  }catch(error){
    const data={
      status:"Error",
      message: error.message,
    };
    return data
  }
}