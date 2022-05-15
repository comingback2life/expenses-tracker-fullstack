import React,{useEffect} from 'react'
import { MainLayout } from '../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { ExpensesForm } from '../components/expenses-form/ExpensesForm';
import { ExpensesTable } from '../components/expenses-form/ExpensesTable';
export const Dashboard = () => {
  const navigate =useNavigate();
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(!user?._id){
      navigate('/');
    }
  },[navigate])

  const handleOnPostData = (e)=>{

  }
  return (
    <MainLayout>
      <h4 className='display-7'>Dashboard</h4>
      <hr/>
      <ExpensesForm handleOnPostData={handleOnPostData}/>
      <ExpensesTable/>
    </MainLayout>
  )
}
