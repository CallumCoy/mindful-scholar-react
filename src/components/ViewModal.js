import { API } from "aws-amplify";

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "./Modal.css"

export class ViewModal extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = props.curSchol;

        this.handleViewerClose = props.handleViewerClose
    }

    close = () => {
        this.handleEditClose()
    }

    joinArr = (arr) => {
        return (arr.join(", "))
    }
    
    render () {
        return (
            <div>
                <Modal
                    className="modal-ku" show={this.props.modalViewerShow} onHide={this.handleViewerClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Scholarship Viewer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <label className="light-text">Scholarship</label>
                            <div className="mb-3">
                                {this.props.curSchol.ScholarshipName || ""}
                            </div>

                            <br/>

                            <label className="light-text">Description</label>
                            <div className="mb-3">
                                {this.props.curSchol.Description || ""}
                            </div>

                            <br/>

                            <label className="light-text">ApplicationLink</label>
                            <div className="mb-3">
                                <a href={this.state.ApplicationLink || ""} className="link-success">{this.state.ApplicationLink || ""}</a>
                            </div>

                            <br/>

                            <label className="light-text">Opening Date</label>
                            <div className="mb-3">
                                {this.props.curSchol.OpeningDate || ""}
                            </div>

                            <br/>

                            <label className="light-text">Closing Date</label>
                            <div className="mb-3">
                                {this.props.curSchol.ExpirationDate || ""}
                            </div>

                            <br/>

                            <label className="light-text">Amount</label>
                            <div className="mb-3">
                                ${this.props.curSchol.Amount || ""}
                            </div>

                            <br/>

                            <label className="light-text">College Level</label>
                            <div className="mb-3">
                                {this.props.curSchol.CollegeLevel.join(", ") || ""}
                            </div>

                            <br/>

                            <label className="light-text">Min GPA</label>
                            <div className="mb-3">
                                {this.props.curSchol.minGPA || ""}
                            </div>

                            <br/>

                            <label className="light-text">Max GPA</label>
                            <div className="mb-3">
                                {this.props.curSchol.maxGPA || ""}
                            </div>

                            <br/>

                            <label className="light-text">Backer</label>
                            <div className="mb-3">
                                {this.props.curSchol.Provider || ""}
                            </div>
                            
                            <br/>

                            <label className="light-text">Interests</label>
                            <div className="mb-3">
                                {this.props.curSchol.Interests.join(", ") || ""}
                            </div>

                            <br/>

                            <label className="light-text">Ethnicity</label>
                            <div className="mb-3">
                                {this.props.curSchol.Ethnicity.join(", ") || ""}
                            </div>

                            <br/>

                            <label className="light-text">Citizenship Status</label>
                            <div className="mb-3">
                                {this.props.curSchol.CitizenshipStatus || ""}
                            </div>

                            <br/>

                            <label className="light-text">State of Residency</label>
                            <div className="mb-3">
                                {this.props.curSchol.StateOfResidency || ""}
                            </div>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleViewerClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.saveAndQuit}>
                                    Edit
                                </Button>
                            </Modal.Footer>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}