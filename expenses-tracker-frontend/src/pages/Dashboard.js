import React,{useEffect, useState} from 'react'
import { MainLayout } from '../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { ExpensesForm } from '../components/expenses-form/ExpensesForm';
import { ExpensesTable } from '../components/expenses-form/ExpensesTable';
import { getUserExpenses, postExpenses } from '../components/helpers/axiosHelper';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
export const Dashboard = () => {
  const [response, setResponse] = useState({
    status:"",
    message: ""
  });


  const [loading,setLoading]=useState(false);
  const navigate =useNavigate();


  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(!user?._id){
      navigate('/');
    }
  },[navigate])



  const handleOnPostData = async (formData)=>{
    setLoading(true);
    const {data} = await postExpenses(formData);
    setLoading(false);
    console.log('here',data.message)
    setResponse(data)
  }

  const fetchExpenses = async () =>{
    const data = await getUserExpenses();
  }
  return (
    <MainLayout>
      <h4 className='display-7 mt-5 mb-3'>Dashboard</h4>
      <hr/>
      <Row className='mb-5'>
        <Col>
      
      {
        loading && <Spinner variant='primary' animation='border'></Spinner>
      }
      {
        response?.message && <Alert variant={response.status ==="success" ? "success":"danger"}>{response?.message}</Alert>
      }
        </Col>
      </Row>
      <ExpensesForm handleOnPostData={handleOnPostData}/>
      <ExpensesTable/>
    </MainLayout>
  )
}
