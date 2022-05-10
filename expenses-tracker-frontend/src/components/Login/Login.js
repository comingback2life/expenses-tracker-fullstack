import {React,useRef,useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { postLogin } from '../helpers/axiosHelper';
export const Login = () => {
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const [error,setErorr]= useState("");
  const [loading,setLoading]=useState("");

  const handleOnSubmit = async () =>{
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(!email || !password){
      return alert("Please enter the email and password");
    }
    setLoading(true);
    const {data}= await postLogin({email,password});
    setLoading(false);
  
    if(data.status==="success"){
      const {name,email,_id} = data.user;
      sessionStorage.setItem('user',JSON.stringify({name,email,_id}));
  //if Login is successful, store user data in session storage
    }
    setErorr(data.message);
    console.log(data);
  }
  return (
    <div className="login-comp mt-5">
    <Form>
      <h4>Welcome Back 🥳</h4>
      <hr/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref ={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary"  onClick={handleOnSubmit}>
  Login 🌝
  </Button>
  <div className="text-end">
    New Here ? <Link to='/register'>Register Here</Link>
  </div>
</Form>
</div>
  )
}
