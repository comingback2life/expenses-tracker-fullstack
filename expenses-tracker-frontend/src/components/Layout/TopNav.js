import React,{useEffect,useState} from 'react'
import {Container, Nav, Navbar,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
export const TopNav = () => {
  let navigate = useNavigate();
  const [user,setUser]= useState({});
  useEffect(()=>{
    const userInfo= JSON.parse(sessionStorage.getItem('user'));
    setUser(userInfo);
  },[]);
  const handleOnLogOut = ()=>{
    sessionStorage.removeItem('user');
    navigate('/');
  }
  return (
    <Navbar bg="warning" expand="md">
  <Container>
    <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {
          user?._id ? <>
          Welcome {user.name} 
          <Button variant="primary" className='mx-3' onClick={handleOnLogOut}>Logout</Button>
          </>:<>
           <LinkContainer to="/" className="hasColoredText">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        <LinkContainer to="/register" className="hasColoredText">
          <Nav.Link>
            Register
          </Nav.Link>
        </LinkContainer>
          
          </>
        }
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
