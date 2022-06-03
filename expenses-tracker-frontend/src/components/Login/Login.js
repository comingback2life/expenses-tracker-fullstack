import {React,useRef,useState} from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../helpers/axiosHelper';
import { loginSuccessResponse,setResponse,isLoadingPending } from '../register/userSlice';
import { useDispatch,useSelector} from 'react-redux';
export const Login = () => {
  const dispatch = useDispatch();
  const {res,isLoading}=useSelector((state)=>state.user)
  const emailRef=useRef("");
  const passwordRef=useRef("");

  let navigate = useNavigate();


  const handleOnSubmit = async () =>{
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
 
    if(!email || !password){
      return alert("Please enter the email and password");
    }
    
    // setLoading(true);
    dispatch(isLoadingPending(true));
    const {data}= await postLogin({email,password});
 
  
    if(data.status==="success" && data.user){
      const {name,email,_id} = data.user;
      dispatch(loginSuccessResponse(data.user));
      sessionStorage.setItem('user',JSON.stringify({name,email,_id}));
      navigate('/dashboard');
  //if Login is successful, store user data in session storage
       return;
    }
    dispatch(setResponse(data))
  }
  return (
    <div className="login-comp mt-5">
    <Form>
      <h4>Welcome Back 🥳</h4>
   
      <hr/>
      {
        isLoading && <Spinner animation="border" variant="primary"/>
      }
      {
        res?.message && <Alert variant='danger'>{res?.message}</Alert>
      }
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref ={passwordRef} type="password" placeholder="Password" autoComplete="on" required />
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
