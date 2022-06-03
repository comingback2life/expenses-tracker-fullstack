import React, {useEffect, useState} from 'react';
import {  Alert, Button, FormCheck, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {fetchExpenses, handleOnDeleteExpenses} from '../../pages/dashboard/dashboardAction';


export const ExpensesTable = () => {
  const [show,setShow]= useState(true)
  const {expenses,isLoading,res} =useSelector(state=>state.dashboard)
  const [ids,setIds]= useState([]);
  const [filter,setFilter]=useState('all');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchExpenses());
    res.status==="success"&&setIds([]);
  },[res])



  const handleOnDeleteClick= async (postIDs)=>{
    if(!window.confirm("Do you really want to delete ?")) return;
    dispatch(handleOnDeleteExpenses(postIDs));
    
  }
  const handleOnSelect = e=>{
    const{value,checked} = e.target;
    checked ? setIds([...ids,value]): setIds(ids.filter(id=>id!==value)); //the value that does not match

  }

  const incomes = expenses.filter(expense=>expense.type==='income');
  const expenditure = expenses.filter(expense=>expense.type==='expenditure');
  const transactions={
    "all":expenses,
    "income":incomes,
    "expenditure":expenditure
  } //pass according to the key being find
  const total=expenses.reduce((acc,item)=>acc+item.amount,0)

  return (
    <div>
 
      {isLoading && <Spinner animation= "border" variant="primary"/>}
      {
     show && res?.message &&  <Alert variant={res.status==="success" ? 'success':'danger'} onClick = {()=>setShow(false)} dismissible>{res?.message}</Alert>
      }
      <div className="btn-group">
      <Button className='btn btn-primary mx-2' onClick={()=>setFilter('all')} name="all">All</Button>
      <Button className='btn btn-success' onClick={()=>setFilter('income')} name='income'>Income</Button>
      <Button className='btn btn-danger mx-2' onClick={()=>setFilter('expenditure')} name='expenditure'>Expenditure</Button>
      </div>

 
      <ListGroup variant="flush mt-5 mb-5">
      <ListGroup.Item className='fw-bold'>
            <span className="title">Expenses Title</span>
            <span className="amount">Expenses Amount</span>
          </ListGroup.Item>
        {
           transactions[filter].map((el, i) => (
            <ListGroup.Item key={i._id+"asd"+i}>
            <span className='d-flex'> <FormCheck type='checkbox' className='mr-2' onClick={handleOnSelect} value={el._id}></FormCheck>
            <span className="title mx-3">{el.name}</span>
            </span>
            {el.type==="expenditure"?  <span className="amount">-${el.amount}</span> :<span className="amount">${el.amount}</span>}
            <Button onClick={()=>handleOnDeleteClick([el._id])}>Delete Me</Button>
          </ListGroup.Item>
          )
            
          ) 
        
}
          
        <ListGroup.Item className='fw-bold'>
          <span className="total">Total Money Flow</span>
      
          <span className="amount">${total}
</span>
        </ListGroup.Item>

      </ListGroup>
      <div className="mb-2 text-end">
      {ids.length>0 && <Button variant="danger" onClick = {()=>handleOnDeleteClick(ids)}>Delete Selected Expenses</Button>}
      </div>
     
    </div>
  );
};
