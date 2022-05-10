import React from 'react'
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Register = () => {
  return (
    <div className="login-comp mt-5">
    <Form>
      <h4>Be a part of us, join our family ! 🥳</h4>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="success" type="submit">
  Register 🌝
  </Button>
  <div className="text-end">
    Joined us already? <Link to='/'>Login Here</Link>
  </div>
</Form>
</div>
  )
}
