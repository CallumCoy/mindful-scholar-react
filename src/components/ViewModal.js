import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./Modal.css";

export class ViewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.curSchol;

    this.handleViewerClose = props.handleViewerClose;
    this.handleEditShow = props.handleEditShow;
    this.deleteScholarship = props.deleteScholarship;
  }

  handleDelete = () => {
    this.props.deleteScholarship(this.props.curSchol);
    this.handleViewerClose();
  };

  manageEdit = () => {
    this.handleViewerClose();
    this.handleEditShow();
  };

  joinArr = (arr) => {
    return arr;
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-ku"
          show={this.props.modalViewerShow}
          onHide={this.handleViewerClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Scholarship Viewer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className="light-text">Scholarship</label>
            <div className="mb-3">
              {this.props.curSchol.ScholarshipName || ""}
            </div>

            <br />

            <label className="light-text definition">Description</label>

            <br />

            <textarea
              className="mb-3 w-100"
              rows="8"
              value={this.props.curSchol.Description || ""}
              disabled
            ></textarea>

            <br />

            <label className="light-text">ApplicationLink</label>
            <div className="mb-3">
              <a
                href={this.props.curSchol.ApplicationLink}
                className="link-success"
              >
                {this.props.curSchol.ApplicationLink}
              </a>
            </div>

            <br />

            <label className="light-text">Opening Date</label>
            <div className="mb-3">{this.props.curSchol.OpeningDate || ""}</div>

            <br />

            <label className="light-text">Closing Date</label>
            <div className="mb-3">
              {this.props.curSchol.ExpirationDate || ""}
            </div>

            <br />

            <label className="light-text">Amount</label>
            <div className="mb-3">
              {this.props.curSchol.Amount > 0
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(this.props.curSchol.Amount)
                : "Varies"}
            </div>

            <br />

            <label className="light-text">Education Level</label>
            <div className="mb-3">{this.props.curSchol.CollegeLevel || ""}</div>

            <br />

            <label className="light-text">Min GPA</label>
            <div className="mb-3">{this.props.curSchol.minGPA || ""}</div>

            <br />

            <label className="light-text">Max GPA</label>
            <div className="mb-3">{this.props.curSchol.maxGPA || ""}</div>

            <br />

            <label className="light-text">Backer</label>
            <div className="mb-3">{this.props.curSchol.Provider || ""}</div>

            <br />

            <label className="light-text">Interests</label>
            <div className="mb-3">{this.props.curSchol.Interests || ""}</div>

            <br />

            <label className="light-text">Ethnicity</label>
            <div className="mb-3">{this.props.curSchol.Ethnicity || ""}</div>

            <br />

            <label className="light-text">Citizenship Status</label>
            <div className="mb-3">
              {this.props.curSchol.CitizenshipStatus || ""}
            </div>

            <br />

            <label className="light-text">State of Residency</label>
            <div className="mb-3">
              {this.props.curSchol.StateOfResidency || ""}
            </div>
            <Modal.Footer>
              <div className="container">
                <div
                  className="btn-group class w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    className="btn-light btn-outline-info p-2"
                    onClick={this.handleViewerClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="btn-light btn btn-outline-success p-2"
                    onClick={this.manageEdit}
                    disabled={!this.props.loggedIn}
                    hidden={!this.props.loggedIn}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-light btn-outline-danger p-2"
                    onClick={this.handleDelete}
                    disabled={!this.props.loggedIn}
                    hidden={!this.props.loggedIn}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
