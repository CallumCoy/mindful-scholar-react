import React from 'react'
import { elastic as Menu } from 'react-burger-menu'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './sidebar.css'

export class SideBar extends React.Component {
  render () {

    return (
      <Menu width={'400px'}>
        <div>
            <Form.Label className="light-text">Scholarship</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Scholarship"
                aria-label="Scholarship"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <br/>

            <Form.Label className="light-text">Application Date</Form.Label>
            <input type="date" class="form-control"/>

            <br/>

            <Form.Label className="light-text">GPA</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="4.0"
                aria-label="GPA"
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

            <Form.Label className="light-text">Amount</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                placeholder="1000"
                aria-label="Amount"
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
        </div>
      </Menu>
    );
  }
}