import React, {useEffect, useState} from 'react';
import {  Alert, Button, FormCheck, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {fetchExpenses, handleOnDeleteExpenses} from '../../pages/dashboard/dashboardAction';


export const ExpensesTable = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchExpenses());
  },[])

  const [ids,setIds]= useState([]);

  const handleOnDeleteClick= async (postIDs)=>{
    if(!window.confirm("Do you really want to delete ?")) return;
    dispatch(handleOnDeleteExpenses(postIDs));
  }
  const handleOnSelect = e=>{
    const{name,value,checked} = e.target;
    checked ? setIds([...ids,value]): setIds(ids.filter(id=>id!==value)); //the value that does not match

  }

const {expenses,isLoading,res} =useSelector(state=>state.dashboard)
  const total=expenses.reduce((acc,item)=>acc+item.amount,0)

  return (
    <div>
 
      {isLoading && <Spinner animation= "border" variant="primary"/>}
      {
        res?.message && <Alert variant={res.status==="success" ? 'success':'danger'}>{res?.message}</Alert>
      }
      <ListGroup variant="flush mt-5 mb-5">
      <ListGroup.Item className='fw-bold'>
            <span className="title">Expenses Title</span>
            <span className="amount">Expenses Amount</span>
          </ListGroup.Item>
        {
          expenses.map((el, i) => (
            <ListGroup.Item key={i}>
            <span className='d-flex'> <FormCheck type='checkbox' className='mr-2' onClick={handleOnSelect} value={el._id}></FormCheck>
            <span className="title mx-3">{el.name}</span>
            </span>
            <span className="amount">${el.amount}</span>
            <Button onClick={()=>handleOnDeleteClick([el._id])}>Delete Me</Button>
          </ListGroup.Item>
          )
            
          )
        }
          
        <ListGroup.Item className='fw-bold'>
          <span className="total">Total</span>
      
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
