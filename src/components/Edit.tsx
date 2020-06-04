import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";
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

const IdWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 0.1rem 1rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      height: "90%",
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  textInput: {
    margin: theme.spacing(1),
    width: "90%",
    height: "80%",
  },
  numberInput: {
    "& .MuiInputBase-input": {
      textAlign: "center",
      width: "10vw",
    },
    "& .MuiInputBase-root": {
      width: "10vw",
    },
  },
}));

const Edit: React.FunctionComponent<EditProps> = ({
  note,
  editNote,
  deletePickedNote,
}) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();
  const [noteId, setNoteId] = React.useState(note.id);
  const [noteTitle, setNoteTitle] = React.useState(note.title);
  const [noteContent, setNoteContent] = React.useState(note.body);
  const [userId, setUserId] = React.useState(note.userId);

  const handleIdChange = (event: any) => {
    setNoteId(event.target.value);
  };

  const handleChange = (event: any) => {
    setNoteTitle(event.target.value);
  };

  const handleNoteContentChange = (event: any) => {
    setNoteContent(event.target.value);
  };

  const handleUserIdChange = (event: any) => {
    setUserId(event.target.value);
  };

  const pickNote = () => {
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
        <TextField
          className={classes.textInput}
          label={langData[contextValue].postLabel}
          value={noteTitle}
          onChange={(e) => handleChange(e)}
          id="noteId"
          variant="outlined"
        />
        <TextField
          className={classes.textInput}
          id="noteContent"
          label={langData[contextValue].postContent}
          value={noteContent}
          onChange={handleNoteContentChange}
          multiline
          rows="6"
          variant="outlined"
        />
        <IdWrap>
          <TextField
            className={classes.numberInput}
            id="Id"
            label="Id"
            value={noteId}
            onChange={handleIdChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => pickNote()}
          >
            {langData[contextValue].editButton}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletePickedNote(note.id)}
          >
            {langData[contextValue].deleteButton}
          </Button>
          <TextField
            className={classes.numberInput}
            id="userId"
            label="userId"
            value={userId}
            onChange={handleUserIdChange}
            variant="outlined"
          />
        </IdWrap>
      </InputWrap>
    </form>
  );
};

export default Edit;
