import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000; //use the port from process env or if falsey value then use 8000.



app.get('*',(req,res)=>{
  res.status(404).send(`<h1>404, not found</h1>`);
})

app.listen(PORT,(error)=>{
  error && console.log(error); //if error > log Error
  console.log(`Server is running on ${PORT}`);
})