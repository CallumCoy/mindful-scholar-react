import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Auth } from "aws-amplify";

import "./ModalSignUp.css";

export class ModalSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticating: Auth.currentUserCredentials().authenticated || null,
    };
    this.handleSignUpClose = this.props.handleSignUpClose;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  loginCheck = () => {
    if (this.props.username != null) {
      this.handleSignUpClose();
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      autoSignIn: true,
    });
    this.setState({ authenticating: true });
    this.setState({ username: null });
    this.setState({ password: null });
  }

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalSignUpShow}
          onHide={this.handleSignUpClose}
          onShow={this.loginCheck}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div show={this.state.authenticating}>auth code</div>

            <div show={!this.state.authenticating}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Label className="light-text">username</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="username"
                    placeholder="username"
                    aria-label="username"
                    aria-describedby="basic-addon1"
                    value={this.state.username || ""}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>

                <br />
                <Form.Label className="light-text">email</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="email"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    value={this.state.email || ""}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>

                <br />
                <Form.Label className="light-text">Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="Password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    value={this.state.Password || ""}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>

                <br />
                <Modal.Footer>
                  <div className="container">
                    <div
                      className="btn-group class w-100"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button
                        className="btn-light btn-outline-danger"
                        onClick={this.handleSignUpClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="btn-light btn btn-outline-success"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Modal.Footer>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
