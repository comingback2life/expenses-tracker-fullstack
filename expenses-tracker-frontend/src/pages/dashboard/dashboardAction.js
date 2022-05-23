import { getUserExpenses } from "../../components/helpers/axiosHelper";
import {setExpenses} from './dashboardSlice';
export const fetchExpenses =  () => async (dispatch) =>{
  const {data} = await getUserExpenses();
  console.log(data)
    data.status==="success" && dispatch(setExpenses(data.getUserExpenses));
  // data?.status==='success' && setExpensesList(data.getUserExpenses)
}