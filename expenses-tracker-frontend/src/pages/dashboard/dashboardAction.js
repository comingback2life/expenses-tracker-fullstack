import { deleteExpense, getUserExpenses,postExpenses} from "../../components/helpers/axiosHelper";
import {requestPending, setExpenses, setResponse} from './dashboardSlice';
export const fetchExpenses =  () => async (dispatch) =>{
  dispatch(requestPending());
  const {data} = await getUserExpenses();
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
export const handleOnDeleteExpenses = ids => async dispatch =>{
  dispatch(requestPending());
  const {data} = await deleteExpense(ids);
  dispatch(setResponse(data));
  data.status==='success' && dispatch(fetchExpenses());
}