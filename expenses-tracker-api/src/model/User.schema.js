import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    index: 1 //ascending order to index.
  },
  password:{
    type:String,
    required:true,
    minLength:[10, "Password must be atleast 10 characters"]
  }
},{
  timestamps:true,
});

export default mongoose.model('User',userSchema);