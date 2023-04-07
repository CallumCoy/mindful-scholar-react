import "./CardHolder.css";
import React, { Component } from "react";
import { View } from "@aws-amplify/ui-react";
import { ScholarCard } from "./ScholarCard";

export class CardHolder extends Component {
  render() {
    return (
      <div className="w-100 card-container">
        <View margin="3rem 0">
          <ul className="row m-auto pr-5">
            {this.props.scholarships.map((Scholarship) => (
              <li
                key={Scholarship.id}
                className="card my-2 mx-auto bg-transparent border-0 pr-4"
                hidden={!Scholarship.show}
              >
                <ScholarCard
                  deleteScholarship={this.props.deleteScholarship}
                  handleEditShow={this.props.handleEditShow}
                  handleViewerShow={this.props.handleViewerShow}
                  setCurSchol={this.props.setCurSchol}
                  Scholarship={Scholarship}
                  curSchol={this.props.curSchol}
                  modalViewerShow={this.props.modalViewerShow}
                  loggedIn={this.props.loggedIn}
                />
              </li>
            ))}
          </ul>
        </View>
      </div>
    );
  }
}
