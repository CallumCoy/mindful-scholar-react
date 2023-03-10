import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "./ModalSignIn.css";

export class ModalSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignInClose = this.props.handleSignInClose;
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
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form>
                <Form.Label className="light-text">username</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="username"
                    placeholder="username"
                    aria-label="username"
                    aria-describedby="basic-addon1"
                    value={this.state.username || ""}
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
                  />
                </InputGroup>

                <br />
                <div className="container">
                  <div
                    className="btn-group class w-100"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Modal.Footer>
                      <Button
                        className="btn-light btn-outline-danger p-2"
                        onClick={this.handleSignInClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="btn-light btn btn-outline-success p-2"
                        type="submit"
                      >
                        Sign-In
                      </Button>
                    </Modal.Footer>
                  </div>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
