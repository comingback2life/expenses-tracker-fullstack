import express from 'express';
import { createExpense } from '../model/expensesModel/Expenses.model.js';
const router = express.Router();

//get 
router.get('/',(req,res)=>{
  res.json({
    message:"Welcome to expenses API"
  })
})


//post
router.post('/',async (req,res)=>{
try{
  const result = await createExpense(req.body);

  res.json({
    message:"Welcome to expenses API post"
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