import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

export const ExpensesForm = () => {
  return (
    <div>
      <Form>
      <Row className='bg-light g-3 mt-3 mb-3 p-4 border rounded-top'>
        <Col md={4}>
          <Form.Control 
          type="text"
          class="form-control"
          placeholder="Expenses Title"
          aria-label="Expenses Title">
          </Form.Control>
        </Col>
        <Col md={2}>
          <Form.Control 
          type="number"
          class="form-control"
          placeholder="Amount"
          aria-label="Amount">
          </Form.Control>
        </Col>
        <Col md={4}>
          <Form.Control 
          type="date"
          class="form-control">
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button variant="btn btn-outline-dark">Add Expense</Button>
        </Col>
      </Row>
      </Form>
    </div>

  )
}
