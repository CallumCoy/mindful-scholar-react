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
      email: "",
      password: "",
      errorMessage: "",
      failure: false,
      awaitComfirmation: false,
    };
    this.handleSignUpClose = this.props.handleSignUpClose;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reset = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ errorMessage: "" });
    this.setState({ failure: false });
    this.setState({ awaitComfirmation: false });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  loginCheck = () => {
    if (this.props.username != null) {
      this.handleSignUpClose();
    }
  };

  async handleSubmit(event) {
    event.preventDefault();
    const password = this.state.password;
    const email = this.state.email;

    this.setState({ failure: false });
    this.setState({ password: "" });

    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
        validationData: [],
        autoSignIn: {
          enabled: true,
        },
      }).then((res) => {
        if (res.userConfirmed) {
          this.handleSignUpClose();
        } else {
          this.setState({ awaitComfirmation: true });
        }
        this.setState({ username: "" });
      });
    } catch (err) {
      console.error(err);
      this.setState({ failure: true });
      this.setState({ errorMessage: String(err).split(":")[1] });
    }
  }

  render() {
    return (
      <div onLoad={this.reset}>
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Label className="light-text">email</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="email"
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />
              <Form.Label className="light-text">
                Password (8 chars min)
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />
              <Modal.Footer>
                {this.state.failure && (
                  <div className="w-100 text-danger text-center">
                    {this.state.errorMessage}
                  </div>
                )}

                {this.state.awaitComfirmation && (
                  <div className="w-100 text-success text-center">
                    Account has been made, please contact an admin to approve
                    the request.
                  </div>
                )}

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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
