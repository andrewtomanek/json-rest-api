import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { NoteObject } from "../store/reducers/types";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
interface InputProps {
  createNote: (note: NoteObject) => void;
}

const InputWrap = styled(Card)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;
  justify-content: stretch;
  padding: 1rem;
  margin: auto;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const Input: React.FunctionComponent<InputProps> = ({ createNote }) => {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const classes = useStyles();
  const [noteId, setNoteId] = React.useState(getRandomInt(1, 9999));
  const [noteContent, setNoteContent] = React.useState("");
  const [noteTitle, setNoteTitle] = React.useState("");
  const [userId, setUserId] = React.useState(getRandomInt(1, 9999));

  const updateNoteId = (value: number) => {
    setNoteId(value);
  };

  const updateNoteTitle = (value: string) => {
    setNoteTitle(value);
  };

  const updateNoteContent = (value: string) => {
    setNoteContent(value);
  };

  const updateUserId = (value: number) => {
    setUserId(value);
  };

  const addNote = () => {
    createNote({
      id: noteId,
      title: noteTitle,
      body: noteContent,
      userId: userId,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <InputWrap>
        <TextInput
          noteTitle={noteTitle}
          noteContent={noteContent}
          updateNoteTitle={updateNoteTitle}
          updateNoteContent={updateNoteContent}
        />{" "}
        <NumberInput
          noteId={noteId}
          userId={userId}
          updateNote={addNote}
          updateNoteId={updateNoteId}
          updateUserId={updateUserId}
        />
      </InputWrap>
    </form>
  );
};

export default Input;
