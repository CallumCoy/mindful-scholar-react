import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './header.css'

export class Header extends React.Component {

  constructor(props){
    super(props)
  }

  render () {

    return (
        <Navbar bg="light" expand="lg" className='defaultNavbar'>
        <Container>
          <Navbar.Brand>Mindful Scholars</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <div className='signed-in'>
                <Button variant='primary' className="p-2" onClick={this.props.handleShow}>Create</Button>
                <Button variant='secondary' className="p-2">Sign Out</Button>
            </div>

            <div className='signed-out'>
                <Button variant='primary' className="p-2">Sign In</Button>
                <Button variant='primary' className="p-2">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}