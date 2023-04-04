import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth } from "aws-amplify";
import { View } from "@aws-amplify/ui-react";
import { listScholarships } from "./graphql/queries";
import { deleteScholarship as deleteScholarshipMutation } from "./graphql/mutations";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";
import { AddnSaveModal } from "./components/Modal";
import * as Constants from "./components/constants";
import { CardHolder } from "./components/CardHolder";
import { ViewModal } from "./components/ViewModal";
import { ModalSignUp } from "./components/ModalSignUp";
import { ModalSignIn } from "./components/ModalSignIn";
import { ModalMassCreaion } from "./components/ModalMassInput";
import { filterSet } from "./components/FilterConstructor";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scholarships: [],
      curSchol: Constants.blankSchol,
      modalEditorShow: false,
      modalViewerShow: false,
      modalSignInShow: false,
      modalSignUpShow: false,
      modalMassCreateShow: false,
      loadedScholarship: false,
      loggedIn: true,
      userGroup: null,
    };

    this.fetchScholarships = this.fetchScholarships.bind(this);
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
    this.setState({ modalMassCreateShow: false });
    this.setState({ modalViewerShow: false });
    this.setState({ modalSignInShow: false });
    this.setState({ modalSignUpShow: false });
  };

  handleMassCreateClose = () => {
    this.setState({ modalMassCreateShow: false });
  };

  handleMassCreateShow = () => {
    this.setState({ modalMassCreateShow: true });
    this.setState({ modalEditorShow: false });
    this.setState({ modalViewerShow: false });
    this.setState({ modalSignInShow: false });
    this.setState({ modalSignUpShow: false });
  };

  handleViewerClose = () => {
    this.setState({ modalViewerShow: false });
  };

  handleViewerShow = () => {
    this.setState({ modalViewerShow: true });
    this.setState({ modalMassCreateShow: false });
    this.setState({ modalEditorShow: false });
    this.setState({ modalSignInShow: false });
    this.setState({ modalSignUpShow: false });
  };

  handleSignInClose = () => {
    this.setState({ modalSignInShow: false });
  };

  handleSignInShow = () => {
    this.setState({ modalSignInShow: true });
    this.setState({ modalMassCreateShow: false });
    this.setState({ modalEditorShow: false });
    this.setState({ modalViewerShow: false });
    this.setState({ modalSignUpShow: false });
  };

  handleSignUpClose = () => {
    this.setState({ modalSignUpShow: false });
  };

  handleSignUpShow = () => {
    this.setState({ modalSignUpShow: true });
    this.setState({ modalMassCreateShow: false });
    this.setState({ modalEditorShow: false });
    this.setState({ modalViewerShow: false });
    this.setState({ modalSignInShow: false });
  };

  resetSelection = () => {
    this.setState({ curSchol: Constants.blankSchol });
  };

  setCurSchol(scholarship) {
    this.setState({ curSchol: scholarship });
  }

  async getLoginStatus() {
    try {
      await Auth.currentSession().then((res) => {
        this.setState({ loggedIn: true });
      });
    } catch (err) {
      this.setState({ loggedIn: false });
    }
  }

  resetView = () => {
    this.setState(
      this.state.scholarships.forEach((scholarship) => {
        scholarship.show = true;
      })
    );
  };

  filter = (filters) => {
    this.setState({
      scholarships: filterSet(this.state.scholarships, filters),
    });
  };

  async fetchScholarships() {
    this.setState({ loadedScholarship: true });
    const apiData = await API.graphql({ query: listScholarships });
    let scholarshipsFromAPI = apiData.data.listScholarships.items;

    scholarshipsFromAPI.forEach((scholarship) => {
      scholarship.show = true;
    });

    this.setState({ scholarships: scholarshipsFromAPI });
  }

  async deleteScholarship({ id }) {
    await API.graphql({
      query: deleteScholarshipMutation,
      variables: { input: { id } },
    }).then(() => {
      const newScholarships = this.state.scholarships.filter(
        (scholarship) => scholarship.id !== id
      );
      this.setState({ scholarships: newScholarships });
    });
  }

  render() {
    return (
      <View className="App" onLoad={this.getLoginStatus}>
        <div
          onLoad={this.fetchScholarships}
          id="outer-container"
          className="scrolling background"
        >
          <SideBar
            pageWrapId="page-wrap"
            filter={this.filter}
            resetView={this.resetView}
          />
          <main id="page-wrap">
            <Header
              handleEditShow={this.handleEditShow}
              handleSignUpShow={this.handleSignUpShow}
              handleSignInShow={this.handleSignInShow}
              handleMassCreateShow={this.handleMassCreateShow}
              resetSelection={this.resetSelection}
              getLoginStatus={this.getLoginStatus}
              loggedIn={this.state.loggedIn}
            />

            <AddnSaveModal
              handleEditClose={this.handleEditClose}
              fetchScholarships={this.fetchScholarships}
              resetSelection={this.resetSelection}
              curSchol={this.state.curSchol}
              modalEditorShow={this.state.modalEditorShow}
              scholarships={this.state.scholarships}
            />

            <ModalMassCreaion
              handleMassCreateClose={this.handleMassCreateClose}
              fetchScholarships={this.fetchScholarships}
              modalMassCreateShow={this.state.modalMassCreateShow}
            />

            <ViewModal
              deleteScholarship={this.deleteScholarship}
              handleEditShow={this.handleEditShow}
              handleViewerClose={this.handleViewerClose}
              resetSelection={this.resetSelection}
              curSchol={this.state.curSchol}
              modalViewerShow={this.state.modalViewerShow}
              loggedIn={this.state.loggedIn}
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

            <CardHolder
              deleteScholarship={this.deleteScholarship}
              handleEditShow={this.handleEditShow}
              handleViewerShow={this.handleViewerShow}
              setCurSchol={this.setCurSchol}
              scholarships={this.state.scholarships}
              curSchol={this.curSchol}
              modalViewerShow={this.modalViewerShow}
              loggedIn={this.state.loggedIn}
            />
          </main>
        </div>
      </View>
    );
  }
}
