import express from 'express';
import { createExpense, deleteExpense, getExpenses } from '../model/expensesModel/Expenses.model.js';
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

router.delete('/:_id',async (req,res)=>{
    try{
      const {_id} = req.params;
      const {authorization}= req.headers; 
    const expensesToDelete = await deleteExpense({userID:authorization,_id});
      expensesToDelete ? res.json({
      status:"success",
      message:"Deleted Expenses Successfully"
    }):
     res.json({
    status:"success",
    message:"Sorry, could not delete",
  })
    }catch(Error){
       res.json({
        status:"Error",
        message:"Please do not access this, it's not your post"
      })
    }
})


export default router;