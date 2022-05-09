import express from 'express';
import { findUser, insertUser } from '../model/User.model.js';
const router = express.Router();


// || Login User ||
router.post('/login',async (req,res)=>{
 try{
  const user= await findUser(req.body);
    user?._id?
    res.json({
      status:"success",
      user,
    }) : res.json({
      status:"success",
      message:"Invalid login credentials",
    })
 }catch(error){
  res.json({
    message:error.message,
    status:"Error"
  })
 }
})


//Create user route 
router.post('/',async (req,res)=>{
try{
  const result = await insertUser(req.body);
  result?._id ? 
  res.json({
    message:"User has been created successfully.",
    status:"Success"
  }):res.json({
    message:"User registration failed, please try later.",
    status:"Error"
  })
}catch(error){
  let message=error.message;
  if(error.message.includes('duplicate key error collection')){
    message="User already registered using this email"
  }
  res.json({
    message,
    status:"Error"
  })
}
})


// GET user
router.get('/',(req,res)=>{
  console.log('Get Route got hit');
  res.send("Get User")
})





export default router;