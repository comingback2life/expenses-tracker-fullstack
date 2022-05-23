import { getUserExpenses,postExpenses} from "../../components/helpers/axiosHelper";
import {requestPending, setExpenses, setResponse} from './dashboardSlice';
export const fetchExpenses =  () => async (dispatch) =>{
  dispatch(requestPending());
  const {data} = await getUserExpenses();
  console.log(data)
    data.status==="success" && dispatch(setExpenses(data.getUserExpenses));
  // data?.status==='success' && setExpensesList(data.getUserExpenses)
}
export const handleOnPostData = (formData)=> async dispatch=>{
  dispatch(requestPending());
  // setLoading(true);
  const {data} = await postExpenses(formData);
  dispatch(setResponse(data));
  data.status==='success' && dispatch(fetchExpenses());
}