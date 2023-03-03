import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Menu,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { AddnSaveModal } from './components/Modal';

export default function App() {

  const [notes, setNotes] = useState([]);

  
  const [modalshow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      ScholarshipName: form.get("ScholarshipName"),
      ExpirationDate: form.get("ExpirationDate"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.ScholarshipName !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }


  return (
    <View className="App">
      <div id="outer-container" className='background'>
      <SideBar pageWrapId="page-wrap"/>
      <main id="page-wrap">
      <Header handleShow={handleShow}/>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="ScholarshipName"
            placeholder="Scholarship Name"
            label="Scholarship Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="ExpirationDate"
            placeholder="Scholarship Description"
            label="Scholarship Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Scholarship
          </Button>
        </Flex>
      </View>
      <AddnSaveModal handleClose={handleClose} modalshow={modalshow} />
      <Heading level={2}>Current Scholarships</Heading>
      <View margin="3rem 0">
        {notes.map((Scholarship) => (
          <Flex
            key={Scholarship.ScholarshipName || Scholarship.ExpirationDate}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {Scholarship.ExpirationDate}
            </Text>
            <Text as="span">{Scholarship.ExpirationDate}</Text>
            <Button variation="link" onClick={() => deleteNote(Scholarship)}>
              Delete Scholarship
            </Button>
          </Flex>
        ))}
      </View>
      </main>
      </div>
    </View>
  );
};