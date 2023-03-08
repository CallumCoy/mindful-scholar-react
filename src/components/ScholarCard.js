import React, { Component } from "react";
import TextTruncate from 'react-text-truncate'; 
import { Button } from 'react-bootstrap';
import Moment from 'moment'
import './ScholarCard.css'

export class ScholarCard extends Component {

  constructor(props){
    super(props)

    this.state = props.Scholarship;

    this.deleteScholarship = props.deleteScholarship
    this.handleViewerShow = props.handleViewerShow
    this.handleEditShow = props.handleEditShow
    this.setCurSchol = props.setCurSchol
  }

  manageSelect = () => {
    this.setCurSchol(this.state)
    this.handleViewerShow()
  }

  manageEdit = () => {
    this.setCurSchol(this.state)
    this.handleEditShow()
  }

  render () {
    return(
          <div className="card my-2 mx-auto" id={this.state.id}>
            <div className="card-body">
              <h5 className="card-title">{this.state.ScholarshipName}</h5>  
              <TextTruncate text={this.state.Description} line={3}/>
              <br/>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    GPA Range: {this.state.MinGPA} - {this.state.MaxGPA}
                  </div>
                  <div className="col-sm">
                    Value: ${this.state.Amount}
                  </div>
                  <div className="col-sm">
                  Provider: {this.state.Provider}
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="btn-group class w-100" role="group" aria-label="Basic example">
                  <Button 
                    className='btn-light btn-outline-info p-2'
                    onClick={this.manageSelect}>Select</Button>
                  <Button 
                    className='btn-light btn btn-outline-success p-2'
                    onClick={this.manageEdit}>Edit</Button>
                  <Button
                    className="btn-light btn-outline-danger p-2"
                    onClick={() => this.deleteScholarship(this.state)}>Delete</Button>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Updated on: {Moment(this.state.updatedAt.Date).format('MMM d YYYY')} | Exp. on: {Moment(this.state.ExpirationDate.Date).format('MMM d YYYY')}</small>
            </div>
          </div>
    )
  }
}
