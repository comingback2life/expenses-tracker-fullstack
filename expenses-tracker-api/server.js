import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000; //use the port from process env or if falsey value then use 8000.

//Middleware
import cors from 'cors';
import morgan from 'morgan';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

//Import DB connection 
import { connectDB } from './src/config/db.js';
connectDB();

import userRouter from './src/routers/userRouter.js';
import expensesRouter from './src/routers/expensesRouter.js'
import { useAuth } from './src/middleware/authMD.js';
//Authentication MiddleWare

app.use('/api/v1/user', userRouter);
app.use('/api/v1/expenses',useAuth,expensesRouter);
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(PORT, (error) => {
  error && console.log(error); //if error > log Error
  console.log(`Server is running on ${PORT}`);
});