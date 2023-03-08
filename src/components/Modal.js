import { API } from "aws-amplify";

import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import * as Constants from "./constants";
import {
  createScholarship as createNoteMutation,
  updateScholarship as updateScholarshipMutation,
} from "../graphql/mutations";

export class AddnSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.handleEditClose = props.handleEditClose;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.CreateScholarship = this.CreateScholarship.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  clearForm = () => {
    this.setState({ scholarship: Constants.blankSchol });
  };

  saveAndQuit = () => {
    this.CreateScholarship();
    this.handleEditClose();
  };

  saveAndContinue = () => {
    this.CreateScholarship();
  };

  async CreateScholarship() {
    const data = {
      ScholarshipName: this.state.ScholarshipName,
      ExpirationDate: this.state.ExpirationDate,
      OpeningDate: this.state.OpeningDate,
      Amount: this.state.Amount,
      ApplicationLink: this.state.ApplicationLink,
      CitizenshipStatus: this.state.CitizenshipStatus,
      CollegeLevel: this.state.CollegeLevel,
      Description: this.state.Description,
      Ethnicity: this.state.Ethnicity,
      Interests: this.state.Interests,
      maxGPA: this.state.maxGPA,
      minGPA: this.state.minGPA,
      Provider: this.state.Provider,
      StateOfResidency: this.state.StateOfResidency,
      TypeOfProgram: this.state.TypeOfProgram,
      id: this.state.id,
    };

    if (!data.id) {
      await API.graphql({
        query: createNoteMutation,
        variables: { input: data },
      });
    } else {
      await API.graphql({
        query: updateScholarshipMutation,
        variables: { input: data },
      });
    }
    this.clearForm();
    this.props.resetSelection();
    this.props.fetchNotes();
  }

  close = () => {
    this.handleEditClose();
  };

  pullCurrentSchol = () => {
    this.setState(this.props.curSchol);
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalEditorShow}
          onHide={this.handleEditClose}
          onShow={this.pullCurrentSchol}
        >
          <Modal.Header closeButton>
            <Modal.Title>Scholarship Editor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label className="light-text">Scholarship</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="ScholarshipName"
                  placeholder="Scholarship"
                  aria-label="Scholarship"
                  aria-describedby="basic-addon1"
                  value={this.state.ScholarshipName || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Description</Form.Label>
              <textarea
                className="form-control"
                rows="5"
                id="Description"
                name="Description"
                value={this.state.Description || ""}
                onChange={this.handleInputChange}
              ></textarea>

              <br />

              <Form.Label className="light-text">Application URL</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="ApplicationLink"
                  placeholder="Application_URL"
                  aria-label="Application_URL"
                  aria-describedby="basic-addon1"
                  value={this.state.ApplicationLink || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Opening Date</Form.Label>
              <input
                type="date"
                name="OpeningDate"
                className="form-control"
                value={this.state.OpeningDate || ""}
                onChange={this.handleInputChange}
              />

              <br />

              <Form.Label className="light-text">Application Date</Form.Label>
              <input
                type="date"
                name="ExpirationDate"
                className="form-control"
                value={this.state.ExpirationDate || ""}
                onChange={this.handleInputChange}
              />

              <br />

              <Form.Label className="light-text">Amount</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  name="Amount"
                  type="number"
                  min={0}
                  placeholder="1000"
                  aria-label="Amount"
                  aria-describedby="basic-addon1"
                  value={this.state.Amount || 0}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">College Level</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="CollegeLevel"
                  placeholder="Undergrad"
                  aria-label="CollegeLevel"
                  aria-describedby="basic-addon1"
                  value={this.state.CollegeLevel || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Min GPA</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="minGPA"
                  type="number"
                  min={0}
                  max={4}
                  placeholder="4.0"
                  aria-label="MinGPA"
                  aria-describedby="basic-addon1"
                  value={this.state.minGPA || 0}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Max GPA</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="maxGPA"
                  type="number"
                  min={0}
                  max={4}
                  placeholder="4.0"
                  aria-label="MaxGPA"
                  aria-describedby="basic-addon1"
                  value={this.state.maxGPA || 4}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Backer</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="Provider"
                  placeholder="UCF"
                  aria-label="Backer"
                  aria-describedby="basic-addon1"
                  value={this.state.Provider || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Interests</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="Interests"
                  placeholder="Interests"
                  aria-label="Interests"
                  aria-describedby="basic-addon1"
                  value={this.state.Interests || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Ethnicity</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="Ethnicity"
                  placeholder="Ethnicity"
                  aria-label="Ethnicity"
                  aria-describedby="basic-addon1"
                  value={this.state.Ethnicity || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">Citizenship Status</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="CitizenshipStatus"
                  placeholder="Citizenship Status"
                  aria-label="Citizenship Status"
                  aria-describedby="basic-addon1"
                  value={this.state.CitizenshipStatus || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>

              <br />

              <Form.Label className="light-text">State of Residency</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="StateOfResidency"
                  placeholder="State of Residency"
                  aria-label="State of Residency"
                  aria-describedby="basic-addon1"
                  value={this.state.StateOfResidency || ""}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.clearForm}>
                  Clear
                </Button>
                <Button variant="secondary" onClick={this.close}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.saveAndQuit}>
                  Save & Close
                </Button>
                <Button variant="primary" onClick={this.saveAndContinue}>
                  Save & Continue
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
