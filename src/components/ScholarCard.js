import React, { Component } from "react";
import TextTruncate from 'react-text-truncate'; 
import { Button } from 'react-bootstrap';
import Moment from 'moment'
import './ScholarCard.css'

export class ScholarCard extends Component {

  constructor(props){
    super(props)

    this.state = props.Scholarship;
  }

  render () {
    return(
          <div className="card my-2 mx-auto" id={this.state.id}>
            <div className="card-body">
              <h5 className="card-title">{this.state.ScholarshipName}</h5>  
              <TextTruncate text={this.state.Description} line={3}/>
              <br/>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    GPA Range: {this.state.MinGPA} - {this.state.MaxGPA}
                  </div>
                  <div class="col-sm">
                    Value: ${this.state.Amount}
                  </div>
                  <div class="col-sm">
                  Provider: {this.state.Provider}
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="btn-group class w-100" role="group" aria-label="Basic example">
                  <Button className='btn-light btn-outline-info p-2'>Select</Button>
                  <Button className='btn-light btn btn-outline-success p-2'>Edit</Button>
                  <Button className="btn-light btn-outline-danger p-2">Delete</Button>
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
