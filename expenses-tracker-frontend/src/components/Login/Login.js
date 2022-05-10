import React from 'react'
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const Login = () => {
  return (
    <div className="login-comp mt-5">
    <Form>
      <h4>Welcome Back 🥳</h4>
      <hr/>
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
  <Button variant="primary" type="submit">
  Login 🌝
  </Button>
  <div className="text-end">
    New Here ? <Link to='/register'>Register Here</Link>
  </div>
</Form>
</div>
  )
}
