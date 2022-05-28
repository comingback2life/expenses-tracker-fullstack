import expensesList from './Expenses.schema.js';

//CRUD 

//expense should be an object
export const createExpense = (expense)=>{
  return expensesList.create(expense)
}

//filter must be an object {} with userID 
export const getExpenses = (filter)=>{
  return expensesList.find(filter);
}
//filter must be an object with userID and expensesID.
export const deleteExpense = (filter)=>{
  return expensesList.findOneAndDelete(filter);
}
export const deleteManyExpense = (userId,itemIds,)=>{
  return expensesList.deleteMany({userId,_id:{$in:itemIds}})
}