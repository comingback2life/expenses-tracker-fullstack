import UserSchema from "./User.schema.js";

//insert USER 

export const insertUser=(obj)=>{
return UserSchema(obj).save();
}

//get user 
export const getUser=(_id)=>{
  return UserSchema.findById(_id);
  }


//update user
export const updateUser=(_id,obj)=>{
  return UserSchema.findByIdAndUpdate(_id,obj); //obj must be validated and should be an object before passing here.
}

//find user by any filter
// @filter must be an object
export const findUser = (filter)=>{
  return UserSchema.findOne(filter);
}