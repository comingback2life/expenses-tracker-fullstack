import ExpensesSchema from './Expenses.schema.js';

//CRUD 

//expense should be an object
export const createExpense = (expense)=>{
  return ExpensesSchema.create(expense)
}

//filter must be an object {} with userID 
export const getExpenses = (filter)=>{
  return ExpensesSchema.find(filter);
}