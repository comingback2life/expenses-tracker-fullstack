import { getUserExpenses } from "../../components/helpers/axiosHelper";
export const fetchExpenses =  () => async (dispatch) =>{
  const {data} = await getUserExpenses();
  console.log(data);
  // data?.status==='success' && setExpensesList(data.getUserExpenses)
}