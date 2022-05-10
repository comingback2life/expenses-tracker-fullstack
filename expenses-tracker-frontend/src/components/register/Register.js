import {useState,React} from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { postRegister } from '../helpers/axiosHelper';
const initialFormState = {
   name:"",
   email:"",
   password:"",
} //we may need it to reset our formData.
export const Register = () => {
  const [formData,setFormData]= useState(initialFormState);
  const [isLoading,setIsLoading]=useState(false);
  const [res,setRes]= useState({});


  const handleOnChange = (e)=>{
      const {name,value} = e.target; //name of the input field and the value from the event.
      setFormData({
        ...formData,
        [name]:value //name of the input field and value inside it. can be changed every single time.
      })
  }
  const handleOnSubmit = async e=>{
    e.preventDefault();
    setIsLoading(true);
    const {data} = await postRegister(formData)
    setRes(data);
    setIsLoading(false);
    console.log(data)
  }
  return (
    <div className="login-comp mt-5">
    <Form onSubmit={handleOnSubmit}>
      <h4>Be a part of us, join our family ! 🥳</h4>
      <hr/>
      {
        isLoading &&  <Spinner animation="border" variant="primary" className="text-center"/>
      }

      {
        res.message  && 
          <Alert variant={res.status==="success"?"primary":"danger"}>{res.message}</Alert>
       
        
       
      }

     
      <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control onChange={handleOnChange} type="text" placeholder="Full Name" name='name' required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleOnChange} type="email" placeholder="Enter email" name="email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleOnChange} type="password" placeholder="Password" name="password" required/>
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
