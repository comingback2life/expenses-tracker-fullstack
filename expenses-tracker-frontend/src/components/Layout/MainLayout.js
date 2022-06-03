import React from 'react'
import { Container } from 'react-bootstrap';
import { TopNav } from './TopNav';

export const MainLayout = ({children}) => {
  return (
    <div>
      <TopNav/>
      
      <main className="main">
        <Container>
        {children}
        </Container>
 
      </main>
      <p className='text-muted text-center'> Looking to try out ? 
      <br/>
      username: admin@admin.com
      <br/>
      password : admin123</p>
    <footer className="footer bg-dark text-light p-5 text-center">
      &copy; All rights reserved. Built with ❤️ by Samip
    </footer>
    </div>
  )
}
