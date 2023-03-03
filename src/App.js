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

export default function App() {

  const [notes, setNotes] = useState([]);

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
      <Header/>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="ScholarshipName"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="ExpirationDate"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.ScholarshipName || note.ExpirationDate}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.ExpirationDate}
            </Text>
            <Text as="span">{note.ExpirationDate}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      </main>
      </div>
    </View>
  );
};