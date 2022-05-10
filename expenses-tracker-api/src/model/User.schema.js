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
    minLength:[6, "Password must be atleast 6 characters"]
  }
},{
  timestamps:true,
});

export default mongoose.model('User',userSchema);