import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import { NoteObject } from "../store/reducers/types";

interface EditProps {
  note: NoteObject;
  editNote: (note: NoteObject) => void;
  deletePickedNote: (id: number) => void;
}

const InputWrap = styled(Card)`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  padding: 1rem;
  margin: auto;
`;

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      height: "90%",
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
}));

const Edit: React.FunctionComponent<EditProps> = ({
  note,
  editNote,
  deletePickedNote,
}) => {
  const classes = useStyles();
  const [noteId, setNoteId] = React.useState(note.id);
  const [noteTitle, setNoteTitle] = React.useState(note.title);
  const [noteContent, setNoteContent] = React.useState(note.body);
  const [userId, setUserId] = React.useState(note.userId);

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

  const updateNote = () => {
    editNote({
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
        />
        <NumberInput
          note={note}
          noteId={noteId}
          userId={userId}
          updateNote={updateNote}
          updateNoteId={updateNoteId}
          updateUserId={updateUserId}
          deletePickedNote={deletePickedNote}
        />
      </InputWrap>
    </form>
  );
};

export default Edit;
