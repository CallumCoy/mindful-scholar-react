import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { listScholarships } from "./graphql/queries";
import { deleteScholarship as deleteScholarshipMutation } from "./graphql/mutations";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";
import { AddnSaveModal } from "./components/Modal";
import * as Constants from "./components/constants";
import { ScholarCard } from "./components/ScholarCard";
import { ViewModal } from "./components/ViewModal";
import { ModalSignUp } from "./components/ModalSignUp";
import { ModalSignIn } from "./components/ModalSignIn";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      curSchol: Constants.blankSchol,
      modalEditorShow: false,
      modalViewerShow: false,
      modalSignInShow: false,
      modalSignUpShow: false,
      loadedScholarship: false,
      loggedIn: true,
      userGroup: null,
    };

    this.fetchNotes = this.fetchNotes.bind(this);
    this.deleteScholarship = this.deleteScholarship.bind(this);
    this.getLoginStatus = this.getLoginStatus.bind(this);
    this.setCurSchol = this.setCurSchol.bind(this);
  }

  isEmpty = (str) => {
    return !str || str.length === 0;
  };

  handleEditClose = () => {
    this.setState({ modalEditorShow: false });
  };

  handleEditShow = () => {
    this.setState({ modalEditorShow: true });
  };

  handleViewerClose = () => {
    this.setState({ modalViewerShow: false });
  };

  handleViewerShow = () => {
    this.setState({ modalViewerShow: true });
  };

  handleSignInClose = () => {
    this.setState({ modalSignInShow: false });
  };

  handleSignInShow = () => {
    this.setState({ modalSignInShow: true });
  };

  handleSignUpClose = () => {
    this.setState({ modalSignUpShow: false });
  };

  handleSignUpShow = () => {
    this.setState({ modalSignUpShow: true });
  };

  resetSelection = () => {
    this.setState({ curSchol: Constants.blankSchol });
  };

  setCurSchol(scholarship) {
    this.setState({ curSchol: scholarship });
  }

  async getLoginStatus() {
    var status;
    try {
      status = await Auth.currentSession().then((res) => {
        this.setState({ loggedIn: true });
      });
    } catch (err) {
      this.setState({ loggedIn: false });
    }
  }

  async fetchNotes() {
    this.setState({ loadedScholarship: true });
    const apiData = await API.graphql({ query: listScholarships });
    const notesFromAPI = apiData.data.listScholarships.items;
    this.setState({ notes: notesFromAPI });
  }

  async deleteScholarship({ id }) {
    const newScholarships = this.state.notes.filter(
      (scholarship) => scholarship.ScholarshipName !== id
    );
    this.setState({ scholarships: newScholarships });
    await API.graphql({
      query: deleteScholarshipMutation,
      variables: { input: { id } },
    });
  }

  render() {
    return (
      <View className="App" onLoad={this.getLoginStatus}>
        <div
          onLoad={this.fetchNotes}
          id="outer-container"
          className="background"
        >
          <SideBar pageWrapId="page-wrap" />
          <main id="page-wrap">
            <Header
              handleEditShow={this.handleEditShow}
              handleSignUpShow={this.handleSignUpShow}
              handleSignInShow={this.handleSignInShow}
              resetSelection={this.resetSelection}
              getLoginStatus={this.getLoginStatus}
              loggedIn={this.state.loggedIn}
            />

            <AddnSaveModal
              handleEditClose={this.handleEditClose}
              fetchNotes={this.fetchNotes}
              resetSelection={this.resetSelection}
              curSchol={this.state.curSchol}
              modalEditorShow={this.state.modalEditorShow}
              notes={this.state.notes}
            />

            <ViewModal
              deleteScholarship={this.deleteScholarship}
              handleEditShow={this.handleEditShow}
              handleViewerClose={this.handleViewerClose}
              resetSelection={this.resetSelection}
              curSchol={this.state.curSchol}
              modalViewerShow={this.state.modalViewerShow}
            />

            <ModalSignIn
              handleSignInClose={this.handleSignInClose}
              getLoginStatus={this.getLoginStatus}
              modalSignInShow={this.state.modalSignInShow}
            />

            <ModalSignUp
              handleSignUpClose={this.handleSignUpClose}
              modalSignUpShow={this.state.modalSignUpShow}
            />

            <Heading level={2}>Current Scholarships</Heading>
            <View margin="3rem 0">
              <div className="row m-auto">
                {this.state.notes.map((Scholarship) => (
                  <ScholarCard
                    deleteScholarship={this.deleteScholarship}
                    handleEditShow={this.handleEditShow}
                    handleViewerShow={this.handleViewerShow}
                    setCurSchol={this.setCurSchol}
                    Scholarship={Scholarship}
                    curSchol={this.curSchol}
                    modalViewerShow={this.modalViewerShow}
                    loggedIn={this.state.loggedIn}
                  />
                ))}
              </div>
            </View>
          </main>
        </div>
      </View>
    );
  }
}
