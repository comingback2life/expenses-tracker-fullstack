import mongoose from 'mongoose';

export const connectDB = ()=>{
  try{
    const connectionString = 'mongodb://localhost:27017/expenses_tracker'
    const conn= mongoose.connect(connectionString);
    conn && console.log('Database has been connected');
  }catch(error){
    console.log(error.message);
  }
  
}

