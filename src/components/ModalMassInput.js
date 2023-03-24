import { API } from "aws-amplify";

import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  createScholarship as createscholarshipMutation,
  updateScholarship as updateScholarshipMutation,
} from "../graphql/mutations";

import "./ModalMassInput.css";

export class ModalMassCreaion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      massInput: "",
    };

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
    this.setState({ massInput: "" });
  };

  async CreateScholarships() {
    const parsedList = this.createJson(this.state.massInput);

    console.log(parsedList);
    for (let i = 0; i < parsedList.length; i++) {
      console.log(i);
      const scholarship = parsedList[i];
      this.CreateScholarship(scholarship);
    }

    this.props.fetchScholarships();
  }

  async CreateScholarship(dataPoint) {
    console.log("adding: ", dataPoint);
    const data = {
      ScholarshipName: dataPoint.ScholarshipName,
      ExpirationDate:
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(dataPoint.ExpirationDate)) || new Date(),
      OpeningDate:
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(dataPoint.OpeningDate)) || new Date(),
      Amount:
        dataPoint.Amount === ""
          ? null
          : dataPoint.Amount.match(/(\d|\.)/g).join(""),
      ApplicationLink: dataPoint.ApplicationLink || "",
      CitizenshipStatus: dataPoint.CitizenshipStatus || "",
      CollegeLevel: dataPoint.CollegeLevel || "",
      Description: dataPoint.Description || "",
      Ethnicity: dataPoint.Ethnicity || "",
      Interests: dataPoint.Interests || "",
      maxGPA: dataPoint.maxGPA || 4,
      minGPA: dataPoint.minGPA || 0,
      Provider: dataPoint.Provider || "",
      StateOfResidency: dataPoint.StateOfResidency || "",
      TypeOfProgram: dataPoint.TypeOfProgram || "",
      id: dataPoint.id,
    };

    if (!data.id) {
      await API.graphql({
        query: createscholarshipMutation,
        variables: { input: data },
      });
    } else {
      await API.graphql({
        query: updateScholarshipMutation,
        variables: { input: data },
      });
    }
  }

  createJson = (str) => {
    try {
      const json = JSON.parse(str);
      return json;
    } catch (e) {
      return str;
    }
  };

  close = () => {
    this.props.handleMassCreateClose();
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalMassCreateShow}
          onHide={this.close}
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
                onChange={this.handleInputChange}
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
