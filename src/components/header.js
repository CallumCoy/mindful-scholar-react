import { Heading } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
    this.massCreation = this.massCreation.bind(this);
    this.createScholarship = this.createScholarship.bind(this);
  }

  async createScholarship() {
    await this.props.getLoginStatus().then(() => {
      if (this.props.loggedIn) {
        this.props.resetSelection();
        this.props.handleEditShow();
      }
    });
  }

  async massCreation() {
    await this.props.getLoginStatus().then(() => {
      if (this.props.loggedIn) {
        this.props.handleMassCreateShow();
      }
    });
  }

  async handleSignOut() {
    try {
      await Auth.signOut().then((res) => {
        console.log("logout succ", res);
        this.props.getLoginStatus();
      });
    } catch (err) {
      console.log("logout failure: ", err);
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="float-start">
            <img
              src="/Mindful_Scholars_Logo.png"
              alt=""
              className="defaultImg text-left"
            />
            <Navbar.Brand>Mindful Scholars</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            {this.props.loggedIn && (
              <div className="header-button-container m-auto">
                <div
                  className="btn-group class w-auto"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    className="btn-light btn btn-outline-warning"
                    onClick={this.massCreation}
                    disabled={!this.props.loggedIn}
                    hidden={!this.props.loggedIn}
                  >
                    Mass Add
                  </Button>
                  <Button
                    className="btn-light btn btn-outline-success"
                    onClick={this.createScholarship}
                    disabled={!this.props.loggedIn}
                    hidden={!this.props.loggedIn}
                  >
                    Create
                  </Button>
                  <Button
                    className="btn-light btn-outline-danger"
                    onClick={this.handleSignOut}
                    disabled={!this.props.loggedIn}
                    hidden={!this.props.loggedIn}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            )}

            {!this.props.loggedIn && (
              <div className="header-button-container">
                <div
                  className="btn-group class w-auto"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    className="btn-light btn-outline-info p-2"
                    onClick={this.props.handleSignUpShow}
                    disabled={this.props.loggedIn}
                    hidden={this.props.loggedIn}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className="btn-light btn btn-outline-success p-2"
                    onClick={this.props.handleSignInShow}
                    disabled={this.props.loggedIn}
                    hidden={this.props.loggedIn}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
