import React,{useEffect, useState} from 'react'
import { MainLayout } from '../../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { ExpensesForm } from '../../components/expenses-form/ExpensesForm';
import { ExpensesTable } from '../../components/expenses-form/ExpensesTable';
import { getUserExpenses, postExpenses,deleteExpense } from '../../components/helpers/axiosHelper';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export const Dashboard = () => {
  const [response, setResponse] = useState({
    status:"",
    message: ""
  });

  // const [expensesList,setExpensesList]= useState([]);


  const [loading,setLoading]=useState(false);
  const navigate =useNavigate();
  const {isLoading,res} =useSelector(state=>state.dashboard)

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(!user?._id){
      navigate('/');
    }
    // fetchExpenses();
  },[navigate])



 

  
  return (
    <MainLayout>
      <h4 className='display-7 mt-5 mb-3'>Dashboard</h4>
      <hr/>
      <Row className='mb-5'>
        <Col>
        </Col>
      </Row>
      <ExpensesForm/>
      <ExpensesTable/>
    </MainLayout>
  )
}
