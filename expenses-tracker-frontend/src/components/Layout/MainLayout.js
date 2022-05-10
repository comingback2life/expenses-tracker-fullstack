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

    <footer className="footer bg-dark text-light p-5 text-center">
      &copy; All rights reserved. Built with ❤️ by Samip
    </footer>
    </div>
  )
}
