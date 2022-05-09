import express from 'express';
const router = express.Router();


// || Login User ||
router.post('/login',(req,res)=>{
  console.log(req.body)
  res.send("Login User")
})


//Create user route 
router.post('/',(req,res)=>{
  console.log(req.body);
  res.send("Register User Route")
})


// GET user
router.get('/',(req,res)=>{
  console.log('Get Route got hit');
  res.send("Get User")
})





export default router;