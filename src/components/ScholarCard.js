import React, { Component } from "react";
import TextTruncate from "react-text-truncate";
import { Button } from "react-bootstrap";
import Moment from "moment";
import "./ScholarCard.css";

export class ScholarCard extends Component {
  constructor(props) {
    super(props);

    this.state = props.Scholarship;

    this.deleteScholarship = props.deleteScholarship;
    this.handleViewerShow = props.handleViewerShow;
    this.handleEditShow = props.handleEditShow;
    this.setCurSchol = props.setCurSchol;
  }

  manageSelect = () => {
    this.setCurSchol(this.state);
    this.handleViewerShow();
  };

  manageEdit = () => {
    this.setCurSchol(this.state);
    this.handleEditShow();
  };

  render() {
    return (
      <div className="card my-2 mx-auto" key={this.props.Scholarship.id}>
        <div className="card-body">
          <h5>
            <TextTruncate
              text={this.props.Scholarship.ScholarshipName}
              line={1}
            />
          </h5>
          <TextTruncate text={this.props.Scholarship.Description} line={3} />
          <br />
          <TextTruncate
            text={"Provider: " + this.props.Scholarship.Provider}
            line={1}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                GPA Range: {this.props.Scholarship.minGPA} -{" "}
                {this.props.Scholarship.maxGPA}
              </div>
              <div className="col-sm">
                Value: ${this.props.Scholarship.Amount}
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="btn-group class w-100"
              role="group"
              aria-label="Basic example"
            >
              <Button
                className="btn-light btn-outline-info p-2"
                onClick={this.manageSelect}
              >
                Select
              </Button>
              <Button
                className="btn-light btn btn-outline-success p-2"
                onClick={this.manageEdit}
                hidden={!this.props.loggedIn}
                disabled={!this.props.loggedIn}
              >
                Edit
              </Button>
              <Button
                className="btn-light btn-outline-danger p-2"
                onClick={() => this.deleteScholarship(this.state)}
                hidden={!this.props.loggedIn}
                disabled={!this.props.loggedIn}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Updated on:{" "}
            {Moment(this.props.Scholarship.updatedAt.Date).format("MMM d YYYY")}{" "}
            | Exp. on:{" "}
            {Moment(this.props.Scholarship.ExpirationDate.Date).format(
              "MMM d YYYY"
            )}
          </small>
        </div>
      </div>
    );
  }
}
