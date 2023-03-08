import { API } from "aws-amplify";

import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Constants from './constants'
import {
    createScholarship as createNoteMutation,
} from "../graphql/mutations";

export class AddnSaveModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = props

        this.handleEditClose=props.handleEditClose;
        this.fetchNotes=props.fetchNotes;
        this.resetSelection=props.resetSelection;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.CreateScholarship = this.CreateScholarship.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    clearForm = () => {
        this.setState({"scholarship": Constants.blankSchol})
    }

    saveAndQuit = () => {
        this.CreateScholarship()
        this.handleEditClose()
    }

    saveAndContinue = () => {
        this.CreateScholarship()
    }

    async CreateScholarship () {
      const data = this.state
      console.log("data\n")
      console.log(data)
      console.log(this.state)
      await API.graphql({
        query: createNoteMutation,
        variables: { input: data },
      });
      this.fetchNotes();
      this.resetSelection();
    }

    close = () => {
        this.handleEditClose()
    }

    pullCurrentSchol = () =>{this.setState({curSchol: this.props.curSchol})}
    
    render () {
        return (
            <div>
                <Modal
                    className="modal-ku"
                    show={this.props.modalEditorShow}
                    onHide={this.handleEditClose}
                    onShow={this.pullCurrentSchol}>
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
                                value={this.state.curSchol.ScholarshipName || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Description</Form.Label>
                            <textarea 
                                className="form-control" 
                                rows="5" 
                                id="Description" 
                                name="Description"
                                value={this.state.curSchol.Description || ""}
                                onChange={this.handleInputChange}>
                                </textarea>

                            <br/>

                            <Form.Label className="light-text">Application URL</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="ApplicationLink"
                                placeholder="Application_URL"
                                aria-label="Application_URL"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.ApplicationLink || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Opening Date</Form.Label>
                            <input 
                                type="date" 
                                name="OpeningDate" 
                                className="form-control" 
                                value={this.state.curSchol.OpeningDate || ""}
                                onChange={this.handleInputChange}/>

                            <br/>

                            <Form.Label className="light-text">Application Date</Form.Label>
                            <input 
                                type="date" 
                                name="ExpirationDate" 
                                className="form-control" 
                                value={this.state.curSchol.ExpirationDate || ""}
                                onChange={this.handleInputChange}/>

                            <br/>

                            <Form.Label className="light-text">Amount</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                name="Amount"
                                type='number'
                                min={0}
                                placeholder="1000"
                                aria-label="Amount"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.Amount || 0}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">College Level</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="CollegeLevel"
                                placeholder="Undergrad"
                                aria-label="CollegeLevel"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.CollegeLevel || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Min GPA</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="minGPA"
                                type='number'
                                min={0}
                                max={4}
                                placeholder="4.0"
                                aria-label="MinGPA"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.minGPA || 0}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Max GPA</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="maxGPA"
                                type='number'
                                min={0}
                                max={4}
                                placeholder="4.0"
                                aria-label="MaxGPA"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.maxGPA ||4}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Backer</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="Provider"
                                placeholder="UCF"
                                aria-label="Backer"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.Provider || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>
                            
                            <br/>

                            <Form.Label className="light-text">Interests</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="Interests"
                                placeholder="Interests"
                                aria-label="Interests"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.Interests || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Ethnicity</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="Ethnicity"
                                placeholder="Ethnicity"
                                aria-label="Ethnicity"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.Ethnicity || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Citizenship Status</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="CitizenshipStatus"
                                placeholder="Citizenship Status"
                                aria-label="Citizenship Status"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.CitizenshipStatus || ""}
                                onChange={this.handleInputChange}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">State of Residency</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="StateOfResidency"
                                placeholder="State of Residency"
                                aria-label="State of Residency"
                                aria-describedby="basic-addon1"
                                value={this.state.curSchol.StateOfResidency || ""}
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