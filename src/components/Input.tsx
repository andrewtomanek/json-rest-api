import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";

type NoteObject = { id: number; title: string };
interface InputProps {
  createNote: (note: NoteObject) => void;
}

const InputWrap = styled(Card)`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  padding: 1rem;
  margin: auto;
  width: 90%;
  height: "100%";
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  numberInput: {
    "& .MuiInputBase-input": {
      textAlign: "center",
      width: "10vw"
    },
    "& .MuiInputBase-root": {
      width: "10vw"
    }
  },
  textInput: {
    "& .MuiInputBase-input": {
      width: "100%",
      textAlign: "center"
    },
    "& .MuiInputBase-root": {
      width: "100%"
    }
  }
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

  const handleIdChange = (event: any) => {
    setNoteId(event.target.value);
  };

  const handleChange = (event: any) => {
    setNoteContent(event.target.value);
  };

  const addNote = () => {
    createNote({ id: noteId, title: noteContent });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <InputWrap>
        <TextField
          className={classes.textInput}
          id="noteContent"
          label={langData[contextValue].postLabel}
          value={noteContent}
          onChange={e => handleChange(e)}
          variant="outlined"
        />
        <TextField
          className={classes.numberInput}
          id="Id"
          label="Id"
          value={noteId}
          onChange={handleIdChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={addNote}>
          {langData[contextValue].postButton}
        </Button>
      </InputWrap>
    </form>
  );
};

export default Input;
