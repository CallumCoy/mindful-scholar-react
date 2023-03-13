import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "./ModalSignIn.css";
import { Auth } from "aws-amplify";

export class ModalSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSignInClose = this.props.handleSignInClose;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  async handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    console.log(username, password);
    console.log(this.state);

    try {
      await Auth.signIn(username, password).then((res) => {
        this.setState(username, "");
        this.setState(password, "");
        this.props.getLoginStatus();
        this.handleSignInClose();
      });
    } catch (err) {
      console.log("login Error: ", err);
    }
  }

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalSignInShow}
          onHide={this.handleSignInClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
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
                <Form.Label className="light-text">Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    value={this.state.password || ""}
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
                        onClick={this.handleSignInClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="btn-light btn btn-outline-success"
                        type="submit"
                      >
                        Sign-In
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
