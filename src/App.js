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
import { listNotes } from "./graphql/queries";
import {
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { AddnSaveModal } from './components/Modal';
import * as Constants from './components/constants'

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
    this.deleteNote = this.deleteNote.bind(this)

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
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    console.log([notesFromAPI]);
    this.setState({notes:notesFromAPI});
  }

  async deleteNote({ id }) {
    const newNotes = this.notes.filter((note) => note.ScholarshipName !== id);
    this.setState({notes: newNotes});
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  render () {
    if (!this.loadedScholarship){
    }
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
        {this.state.notes.map((Scholarship) => (
          <Flex
            key={Scholarship.ScholarshipName || Scholarship.ExpirationDate}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {Scholarship.ScholarshipName}
            </Text>
            <Text as="span">{Scholarship.ExpirationDate}</Text>
            <Button variation="link" onClick={() => this.deleteNote(Scholarship)}>
              Delete Scholarship(inactive)
            </Button>
          </Flex>
        ))}
      </View>
      <button onClick={this.fetchNotes}>Fetch Scholarships</button>
      </main>
      </div>
    </View>
    )
  }
};