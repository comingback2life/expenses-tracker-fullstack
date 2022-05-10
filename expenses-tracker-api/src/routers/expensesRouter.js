import express from 'express';
const router = express.Router();

//get 
router.get('/',(req,res)=>{
  res.json({
    message:"Welcome to expenses API"
  })
})


//post
router.post('/',(req,res)=>{
  console.log(req.body)
  res.json({
    message:"Welcome to expenses API post"
  })
})

//delete

router.delete('/',(req,res)=>{
  res.json({
    message:"Welcome to expenses API delete"
  })
})


export default router;