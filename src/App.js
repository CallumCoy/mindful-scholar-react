import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { listScholarships } from "./graphql/queries";
import {
  deleteScholarship as deleteScholarshipMutation,
} from "./graphql/mutations";
import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { AddnSaveModal } from './components/Modal';
import * as Constants from './components/constants'
import { ScholarCard } from './components/ScholarCard';

export class App extends Component {

  constructor (props){
    super(props);

    this.state ={
      notes : [],
      curSchol: Constants.blankSchol,
      modalshow: false,
      loadedScholarship: false,
    }
    console.log(this.state.curSchol)
    console.log(Constants.blankSchol)
    this.fetchNotes = this.fetchNotes.bind(this)
    this.deleteScholarship = this.deleteScholarship.bind(this)

  }

  handleClose = () => {
    this.setState({modalshow:false})
  }

  handleShow = () => {
    this.setState({modalshow:true})
  }

  resetSelection = () => {
    this.setState({curSchol: Constants.blankSchol})
  }

  async fetchNotes() {
    this.setState({loadedScholarship: true})
    const apiData = await API.graphql({ query: listScholarships });
    const notesFromAPI = apiData.data.listScholarships.items;
    console.log([notesFromAPI]);
    this.setState({notes:notesFromAPI});
  }

  async deleteScholarship({ id }) {
    const newNotes = this.notes.filter((note) => note.ScholarshipName !== id);
    this.setState({notes: newNotes});
    await API.graphql({
      query: deleteScholarshipMutation,
      variables: { input: { id } },
    });
  }

  render () {
    return(
    <View className="App">
      <div id="outer-container" className='background'>
      <SideBar pageWrapId="page-wrap"/>
      <main id="page-wrap">
      <Header handleShow={this.handleShow}/>
      <AddnSaveModal 
        handleClose={this.handleClose}
        fetchNotes={this.fetchNotes}
        resetSelection={this.resetSelection}

        curSchol={this.state.curSchol}
        modalshow={this.state.modalshow}
        notes={this.state.notes}
      />
      <Heading level={2}>Current Scholarships</Heading>
      <View margin="3rem 0">
        <div className="row">
        {this.state.notes.map((Scholarship) => (
          <ScholarCard Scholarship={Scholarship}/>
        ))}
        </div>
      </View>
      <button onClick={this.fetchNotes}>Fetch Scholarships</button>
      </main>
      </div>
    </View>
    )
  }
};