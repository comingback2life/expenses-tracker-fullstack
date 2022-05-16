import { getUser } from "../model/User.model.js";

export const useAuth= async (req,res,next)=>{
  try{
  const {authorization} = req.headers;
  if(authorization){
    const user = await getUser(authorization);
    console.log(user);
   return  user?._id? next():res.status(403).json({
      status:"Error",
      message:"You are not authorized to access this feature",// if user id exists go to next middleware
    });
  }
  res.status(403).json({
    status:"Error",
    message:"You are not authorized to access this feature",// if user id exists go to next middleware
  });
}catch(error){
  console.log(error.message);
  res.status(500).json({
    status:"Error",
    message:error.message
  })
  
}
}
  
