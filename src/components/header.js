import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" className="defaultNavbar">
        <Container>
          <img src="/Mindful_Scholars_Logo.png" className="defaultImg" />
          <Navbar.Brand>Mindful Scholars</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <div className="container">
              <div
                className="btn-group class w-100"
                role="group"
                aria-label="Basic example"
              >
                <Button
                  className="btn-light btn btn-outline-success"
                  onClick={this.props.handleEditShow}
                >
                  Create
                </Button>
                <Button className="btn-light btn-outline-danger">
                  Sign Out
                </Button>
              </div>
            </div>

            <div className="container">
              <div
                className="btn-group class w-100"
                role="group"
                aria-label="Basic example"
              >
                <Button
                  className="btn-light btn-outline-info p-2"
                  onClick={this.props.handleSignUpShow}
                >
                  Sign Up
                </Button>
                <Button
                  className="btn-light btn btn-outline-success p-2"
                  onClick={this.props.handleSignInShow}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
