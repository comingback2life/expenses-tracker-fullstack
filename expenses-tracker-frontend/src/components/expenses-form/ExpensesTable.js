import React, {useEffect} from 'react';
import {  Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {fetchExpenses} from '../../pages/dashboard/dashboardAction';

export const ExpensesTable = ({ handleOnDeleteClick }) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchExpenses());
  },[])

const {expenses} =useSelector(state=>state.dashboard)
  const total=expenses.reduce((acc,item)=>acc+item.amount,0)

  return (
    <div>
      <ListGroup variant="flush mt-5 mb-5">
      <ListGroup.Item className='fw-bold'>
            <span className="title">Expenses Title</span>
            <span className="amount">Expenses Amount</span>
          </ListGroup.Item>
        {
          expenses.map((el, i) => (
            <ListGroup.Item key={i}>
            <span className="title">{el.name}</span>
            <span className="amount">${el.amount}</span>
            <Button onClick={()=>handleOnDeleteClick(el._id)}>Delete Me</Button>
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
    </div>
  );
};
