import express from 'express';
import { createExpense, getExpenses } from '../model/expensesModel/Expenses.model.js';
const router = express.Router();

//get 
router.get('/',async (req,res)=>{
  try{
    const {authorization}= req.headers;
    //get all the expenses based on UserID
    const getUserExpenses = await getExpenses({userID:authorization}); //pass userID that came from authorization
    res.json({
      status:"success",
      getUserExpenses,
    })
  }catch(error){
    res.json({
      status:"error",
      message:error.message,
    })
  }
 
})


//post
router.post('/',async (req,res)=>{
try{
  const{authorization}=req.headers
  const result = await createExpense({...req.body,userID:authorization});
  //optional chaining
  result?._id?
  res.json({
    status:"success",
    message:"Expense added successfully"
  }):
  res.json({
    status:"error",
    message:"Error creating expenses, please try again"
  })
}catch(error){
  console.log(error)
  res.json({
    status:"Error",
    message:error.message
  })
}
})

//delete

router.delete('/',(req,res)=>{
  res.json({
    message:"Welcome to expenses API delete"
  })
})


export default router;