import { API } from "aws-amplify";

import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  createScholarship as createNoteMutation,
  updateScholarship as updateScholarshipMutation,
} from "../graphql/mutations";

import "./ModalMassInput.css"

export class AddnSaveModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditClose = props.handleEditClose;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.CreateScholarship = this.CreateScholarship.bind(this);
    this.CreateScholarships = this.CreateScholarships.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  clearForm = () => {
    this.setState({"massInput" : ""});
  };

  async CreateScholarships(list){
    parsedList = JSON.parse(list)
    parsedList.forEach(scholarship => {
        this.CreateScholarship(scholarship);
    })
    
    this.props.fetchNotes();
  }

  async CreateScholarship(dataPoint) {
    const data = {
      ScholarshipName: dataPoint.ScholarshipName,
      ExpirationDate: dataPoint.ExpirationDate || {Date},
      OpeningDate: dataPoint.OpeningDate || {Date},
      Amount: dataPoint.Amount || 500,
      ApplicationLink: dataPoint.ApplicationLink || "www.example.com",
      CitizenshipStatus: dataPoint.CitizenshipStatus || "",
      CollegeLevel: dataPoint.CollegeLevel || "",
      Description: dataPoint.Description || "",
      Ethnicity: dataPoint.Ethnicity || "",
      Interests: dataPoint.Interests || "",
      maxGPA: dataPoint.maxGPA || 0,
      minGPA: dataPoint.minGPA || 4,
      Provider: dataPoint.Provider || "",
      StateOfResidency: dataPoint.StateOfResidency || "",
      TypeOfProgram: dataPoint.TypeOfProgram || "",
      id: dataPoint.id,
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
  }

  close = () => {
    this.handleMassCreateClose();
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalMassCreatShow}
          onHide={this.close}
          onShow={this.pullCurrentSchol}
        >
          <Modal.Header closeButton>
            <Modal.Title>Scholarship Mass Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label className="light-text">JSON Object</Form.Label>
              <textarea
                className="form-control"
                rows="20"
                id="massInput"
                name="massInput"
                value={this.state.massInput || ""}
              ></textarea>

              <div className="container">
                <div
                  className="btn-group class w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <Modal.Footer>
                    <div className="container">
                      <div
                        className="btn-group class w-100"
                        role="group"
                        aria-label="Basic example"
                      >
                        <Button
                          className="btn-light btn-outline-danger p-2"
                          onClick={this.clearForm}
                        >
                          Clear
                        </Button>
                        <Button
                          className="btn-light btn-outline-danger p-2"
                          onClick={this.close}
                        >
                          Close
                        </Button>
                        <Button
                          className="btn-light btn btn-outline-success p-2"
                          onClick={this.CreateScholarships}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Modal.Footer>
                </div>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}