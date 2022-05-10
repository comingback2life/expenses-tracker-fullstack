import React from 'react'
import { ListGroup } from 'react-bootstrap';

export const ExpensesTable = () => {
  return (
    <div>
      <ListGroup variant="flush mt-5 mb-5">
  <ListGroup.Item>
    <span className="title">Expenses Title</span>
    <span className="amount">$300</span>
  </ListGroup.Item>
  <ListGroup.Item>
    <span className="title">Expenses Title</span>
    <span className="amount">$300</span>
  </ListGroup.Item>
  <ListGroup.Item>
    <span className="title">Expenses Title</span>
    <span className="amount">$300</span>
  </ListGroup.Item>
  <ListGroup.Item>
    <span className="title">Expenses Title</span>
    <span className="amount">$300</span>
  </ListGroup.Item>
  <ListGroup.Item className='fw-bold'>
    <span className="total">Total</span>
    <span className="amount">$300</span>
  </ListGroup.Item>

</ListGroup>
    </div>
  )
}
