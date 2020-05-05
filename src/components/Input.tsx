import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";

type NoteObject = { id: number; title: string; body: string; userId: number };
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

const IdWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 0.1rem 1rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
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
  textInput: {
    "& .MuiInputBase-input": {
      width: "100%",
      textAlign: "center",
    },
    "& .MuiInputBase-root": {
      width: "100%",
    },
  },
}));

const Input: React.FunctionComponent<InputProps> = ({ createNote }) => {
  const contextValue = React.useContext(LangContext);
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const classes = useStyles();
  const [noteId, setNoteId] = React.useState(getRandomInt(1, 9999));
  const [noteContent, setNoteContent] = React.useState(
    langData[contextValue].defaultText
  );
  const [noteTitle, setNoteTitle] = React.useState("");
  const [userId, setUserId] = React.useState(getRandomInt(1, 9999));

  const handleIdChange = (event: any) => {
    setNoteId(event.target.value);
  };

  const handleUserIdChange = (event: any) => {
    setUserId(event.target.value);
  };

  const handleNoteContentChange = (event: any) => {
    setNoteContent(event.target.value);
  };

  const handleChange = (event: any) => {
    setNoteTitle(event.target.value);
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
        <TextField
          className={classes.textInput}
          id="noteContent"
          label={langData[contextValue].postLabel}
          value={noteTitle}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
        <TextField
          className={classes.textInput}
          id="noteContent"
          label={langData[contextValue].postContent}
          value={noteContent}
          onChange={handleNoteContentChange}
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
          <TextField
            className={classes.numberInput}
            id="userId"
            label="userId"
            value={userId}
            onChange={handleUserIdChange}
            variant="outlined"
          />
        </IdWrap>
        <Button variant="contained" color="primary" onClick={addNote}>
          {langData[contextValue].postButton}
        </Button>
      </InputWrap>
    </form>
  );
};

export default Input;
