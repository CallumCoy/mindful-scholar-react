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
import { ViewModal } from './components/ViewModal';

export class App extends Component {

  constructor (props){
    super(props);

    this.state ={
      notes : [],
      curSchol: Constants.blankSchol,
      modalEditorShow: false,
      modalViewerShow: false,
      loadedScholarship: false,
    }
    console.log(this.state.curSchol)
    console.log(Constants.blankSchol)

    this.fetchNotes = this.fetchNotes.bind(this)
    this.deleteScholarship = this.deleteScholarship.bind(this)
    this.setCurSchol = this.setCurSchol.bind(this)
  }

  handleEditClose = () => {
    this.setState({modalEditorShow:false})
  }

  handleEditShow = () => {
    this.setState({modalEditorShow:true})
  }

  handleViewerClose = () => {
    this.setState({modalViewerShow:false})
  }

  handleViewerShow = () => {
    this.setState({modalViewerShow:true})
    console.log("open plz")
  }

  resetSelection = () => {
    this.setState({curSchol: Constants.blankSchol})
  }

  setCurSchol(scholarship){
      this.setState({curSchol: scholarship})
      console.log("states")
      console.log(this.state.curSchol)
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
      <Header handleEditShow={this.handleEditShow}/>
      
      <AddnSaveModal 
        handleEditClose={this.handleEditClose}
        fetchNotes={this.fetchNotes}
        resetSelection={this.resetSelection}

        curSchol={this.state.curSchol}
        modalEditorShow={this.state.modalEditorShow}
        notes={this.state.notes}
      />

      <ViewModal 
        handleViewerClose={this.handleViewerClose}
        resetSelection={this.resetSelection}

        curSchol={this.state.curSchol}
        modalViewerShow={this.state.modalViewerShow}
      />

      <Heading level={2}>Current Scholarships</Heading>
      <View margin="3rem 0">
        <div className="row">
        {this.state.notes.map((Scholarship) => (
          <ScholarCard 
            handleViewerShow={this.handleViewerShow}
            setCurSchol={this.setCurSchol}
            
            curSchol={this.curSchol}
            Scholarship={Scholarship}
            modalViewerShow={this.modalViewerShow}/>
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