import mongoose from 'mongoose';

const ExpensesSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
},
{
  timestamps:true
}
)

export default expensesList = mongoose.model('Expense',ExpensesSchema)