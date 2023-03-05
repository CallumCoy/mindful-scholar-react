import { API } from "aws-amplify";

import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Constants from './constants'
import {
  createNote as createNoteMutation,
} from "../graphql/mutations";

export class AddnSaveModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scholarship: props.curSchol
        }

        this.curSchol = props.curSchol

        this.handleClose=props.handleClose.bind(this)
        this.fetchNotes=props.fetchNotes.bind(this)
        this.setNotes=props.setNotes.bind(this)
        this.setSchol=props.setSchol.bind(this)

        console.log(props)
    }

    createArray(input){
        return(JSON.parse("[" + input + "]"))
    }

    clearForm = () => {
        this.setState({"scholarship": Constants.blankSchol})
    }

    saveAndQuit = () => {
        this.createNote()
        this.handleClose()
    }

    saveAndContinue = () => {
        this.createNote()
    }

    async createNote () {
      const data = this.state.scholarship
      await API.graphql({
        query: createNoteMutation,
        variables: { input: data },
      });
      console.log(data)
      this.props.fetchNotes();
      this.props.setSchol({"scholarship": Constants.blankSchol})
    }

    close = () => {
        this.handleClose()
    }
    
    render () {
        return (
            <div>
                <Modal
                    class="modal-ku" show={this.props.modalshow} onHide={this.handleClose}>
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
                                value={this.state.scholarship.ScholarshipName}
                                onChange={e => this.setState({scholarship: {"ScholarshipName": e.target.value}})}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Description</Form.Label>
                            <textarea 
                                class="form-control" 
                                rows="5" 
                                id="Description" 
                                name="Description"
                                value={this.state.scholarship.Description}
                                onChange={e => this.setState({scholarship: {"Description": e.target.value}})}>
                                </textarea>

                            <br/>

                            <Form.Label className="light-text">Application URL</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                name="ApplicationLink"
                                placeholder="Application_URL"
                                aria-label="Application_URL"
                                aria-describedby="basic-addon1"
                                value={this.state.scholarship.ApplicationLink}
                                onChange={e => this.setState({scholarship: {"ApplicationLink": e.target.value}})}
                                />
                            </InputGroup>

                            <br/>

                            <Form.Label className="light-text">Application Date</Form.Label>
                            <input 
                                type="date" 
                                name="ExpirationDate" 
                                class="form-control" 
                                value={this.state.scholarship.ExpirationDate}
                                onChange={e => this.setState({scholarship: {"ExpirationDate": e.target.value}})}/>

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
                                value={this.state.scholarship.Amount}
                                onChange={e => this.setState({scholarship: {"Amount": e.target.value}})}
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
                                value={this.state.scholarship.CollegeLevel}
                                onChange={e => this.setState({scholarship: {"CollegeLevel": e.target.value}})}
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
                                value={this.state.scholarship.minGPA}
                                onChange={e => this.setState({scholarship: {"minGPA": e.target.value}})}
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
                                value={this.state.scholarship.maxGPA}
                                onChange={e => this.setState({scholarship: {"maxGPA": e.target.value}})}
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
                                value={this.state.scholarship.Provider}
                                onChange={e => this.setState({scholarship: {"Provider": e.target.value}})}
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
                                value={this.state.scholarship.Interests}
                                onChange={e => this.setState({scholarship: {"Interests": e.target.value}})}
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
                                value={this.state.scholarship.Ethnicity}
                                onChange={e => this.setState({scholarship: {"Ethnicity": e.target.value}})}
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
                                value={this.state.scholarship.CitizenshipStatus}
                                onChange={e => this.setState({scholarship: {"CitizenshipStatus": e.target.value}})}
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
                                value={this.state.scholarship.StateOfResidency}
                                onChange={e => this.setState({scholarship: {"StateOfResidency": e.target.value}})}
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