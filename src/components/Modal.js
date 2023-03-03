import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

export class AddnSaveModal extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Modal class="modal-ku" show={this.props.modalshow} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Scholarship Editor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Label className="light-text">Scholarship</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Scholarship"
                            aria-label="Scholarship"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Description</Form.Label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>

                        <br/>

                        <Form.Label className="light-text">Application URL</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Application_URL"
                            aria-label="Application_URL"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Application Date</Form.Label>
                        <input type="date" class="form-control"/>

                        <br/>

                        <Form.Label className="light-text">Amount</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                            type='number'
                            min={0}
                            placeholder="1000"
                            aria-label="Amount"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Min GPA</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            type='number'
                            min={0}
                            max={4}
                            placeholder="4.0"
                            aria-label="MinGPA"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Max GPA</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            type='number'
                            min={0}
                            max={4}
                            placeholder="4.0"
                            aria-label="MaxGPA"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Backer</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="UCF"
                            aria-label="Backer"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        
                        <br/>

                        <Form.Label className="light-text">Interests</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Interests"
                            aria-label="Interests"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Ethnicity</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Ethnicity"
                            aria-label="Ethnicity"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">Citizenship Status</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Citizenship Status"
                            aria-label="Citizenship Status"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <br/>

                        <Form.Label className="light-text">State of Residency</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="State of Residency"
                            aria-label="State of Residency"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Save & Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Save & Continue
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}