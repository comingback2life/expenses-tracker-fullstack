import axios from 'axios';
const rootUrl= 'http://localhost:8000/api/v1';
const userApi = rootUrl+"/user";
const userLogin= rootUrl+'/user/login';
const expensesAPI = "http://localhost:8000/api/v1/expenses"

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
export const postExpenses = async formData =>{
  try{
    const user = JSON.parse(sessionStorage.getItem('user'));
    const {data} = await axios.post(expensesAPI, formData,{
      headers:{
      Authorization: user._id,
      }
    });
    return data;
  }catch(error){
    console.log(error.message);
    return {
      data:{
        status:"Error",
        message:"Unexpected Error Occured"
      }
    }
  }
}