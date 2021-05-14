import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";
import { NoteObject } from "../store/reducers/types";

interface NumberInputProps {
  note?: NoteObject;
  noteId: number;
  userId: number;
  updateNote: () => void;
  updateNoteId: (id: number) => void;
  updateUserId: (id: number) => void;
  deletePickedNote?: (id: number) => void;
}

const IdWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.5rem 1rem;
`;

const useStyles = makeStyles(() => ({
  numberInput: {
    "& .MuiInputBase-input": {
      textAlign: "center",
      width: "10vw",
    },
    "& .MuiInputBase-root": {
      width: "10vw",
    },
  },
  inputButton: {
    "& .MuiButton-label": {
      padding: "0 0.2rem",
    },
  },
}));

const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  note,
  noteId,
  userId,
  updateNote,
  deletePickedNote,
  updateNoteId,
  updateUserId,
}) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();

  const handleIdChange = (value: number) => {
    updateNoteId(value);
  };

  const handleUserIdChange = (value: number) => {
    updateUserId(value);
  };

  return (
    <IdWrap>
      <TextField
        className={classes.numberInput}
        id="Id"
        label="Id"
        value={noteId}
        onChange={(e) => handleIdChange(+e.target.value)}
        variant="outlined"
      />
      <Button
        className={classes.inputButton}
        variant="contained"
        color="secondary"
        onClick={updateNote}
      >
        {langData[contextValue].editButton}
      </Button>
      {note && deletePickedNote && (
        <Button
          className={classes.inputButton}
          variant="contained"
          color="secondary"
          onClick={() => deletePickedNote(note.id)}
        >
          {langData[contextValue].deleteButton}
        </Button>
      )}
      <TextField
        className={classes.numberInput}
        id="userId"
        label="userId"
        value={userId}
        onChange={(e) => handleUserIdChange(+e.target.value)}
        variant="outlined"
      />
    </IdWrap>
  );
};

export default NumberInput;
