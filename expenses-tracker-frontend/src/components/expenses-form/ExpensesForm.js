import React ,{useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { handleOnPostData } from '../../pages/dashboard/dashboardAction';
import { useDispatch } from 'react-redux';
const initialState = {
  name:"",
  amount:"",
  date:"",
}
export const ExpensesForm = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData]= useState(initialState);

  const handleOnChange = (e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    dispatch(handleOnPostData(formData));
  }

 
  return (
    <div>
      <Form onSubmit ={handleOnSubmit}>
     
      <Row className='bg-light g-3 mt-3 mb-3 p-4 border rounded-top'>
        <Col md={4}>
          <Form.Control 
          type="text"
          className="form-control"
          name="name"
          placeholder="Expenses Title"
          onChange={handleOnChange}
          required
          aria-label="Expenses Title">
            
          </Form.Control>
        </Col>
        <Col md={2}>
          <Form.Control 
          type="number"
          className="form-control"
          placeholder="Amount"
          aria-label="Amount"
          name="amount"
          onChange={handleOnChange}
          required>
            
          </Form.Control>
        </Col>
        <Col md={4}>
          <Form.Control 
          type="date"
          className="form-control"
          name="date"
          onChange={handleOnChange}
          required>
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button variant="btn btn-outline-dark" type ="submit" onSubmit={handleOnSubmit}>Add Expense</Button>
        </Col>
      </Row>
      </Form>
    </div>

  )
}
