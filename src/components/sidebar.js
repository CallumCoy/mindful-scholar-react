import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "./sidebar.css";

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
      minGPA: null,
      maxGPA: null,
      backer: null,
      amount: null,
      interests: null,
      ethnicity: null,
      citizenship: null,
      education: null,
      state: null,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.filter(this.state);
  };

  render() {
    return (
      <Menu
        width={"400px"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        customBurgerIcon={<div> ⮞ </div>}
      >
        <div className="scrolling">
          <Form.Label className="light-text scrolling">Scholarship</Form.Label>
          <div>
            <InputGroup className="mb-3">
              <Form.Control
                name="name"
                placeholder="Scholarship Name"
                aria-label="Scholarship"
                aria-describedby="basic-addon1"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Application Date</Form.Label>
            <input
              name="date"
              type="date"
              className="form-control"
              value={this.state.date}
              onChange={this.handleInputChange}
            />

            <br />

            <Form.Label className="light-text">Min GPA</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="minGPA"
                placeholder="0.0"
                type="number"
                min={0}
                max={this.state.maxGPA || 4}
                aria-label="minGPA"
                aria-describedby="basic-addon1"
                value={this.state.minGPA}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Max GPA</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="maxGPA"
                placeholder="4.0"
                type="number"
                min={this.state.minGPA || 0}
                max={4}
                aria-label="maxGPA"
                aria-describedby="basic-addon1"
                value={this.state.maxGPA}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Backer</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="backer"
                placeholder="UCF"
                aria-label="Backer"
                aria-describedby="basic-addon1"
                value={this.state.backer}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                name="amount"
                placeholder="1000"
                aria-label="Amount"
                aria-describedby="basic-addon1"
                min={0}
                value={this.state.amount || ""}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Interests</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="interests"
                placeholder="Interests"
                aria-label="Interests"
                aria-describedby="basic-addon1"
                value={this.state.interests || ""}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Ethnicity</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="ethnicity"
                placeholder="Ethnicity"
                aria-label="Ethnicity"
                aria-describedby="basic-addon1"
                value={this.state.ethnicity}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Citizenship Status</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="citizenship"
                placeholder="Citizenship Status"
                aria-label="Citizenship Status"
                aria-describedby="basic-addon1"
                value={this.state.citizenship}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">Education Level</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="education"
                placeholder="Graduate"
                aria-label="education"
                aria-describedby="basic-addon1"
                value={this.state.education}
                onChange={this.handleInputChange}
              />
            </InputGroup>

            <br />

            <Form.Label className="light-text">State of Residency</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="state"
                placeholder="State of Residency"
                aria-label="State of Residency"
                aria-describedby="basic-addon1"
                value={this.state.state}
                onChange={this.handleInputChange}
              />
            </InputGroup>
            <br />
            <Button
              className="btn-light btn btn-outline-success w-100"
              onClick={this.handleSubmit}
            >
              filter
            </Button>
          </div>
        </div>
      </Menu>
    );
  }
}
