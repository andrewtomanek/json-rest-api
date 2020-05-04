import * as React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";

type NoteObject = { id: number; title: string; body: string; userId: number };
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
  width: 90%;
  height: 90%;
`;

const ButtonPanel = styled(Card)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 1rem;
  margin: auto;
  width: 90%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "100%",
      height: "90%",
    },
  },
  textInput: {
    margin: theme.spacing(1),
    width: "90%",
    height: "80%",
  },
}));

const Edit: React.FunctionComponent<EditProps> = ({
  note,
  editNote,
  deletePickedNote,
}) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();
  const [noteTitle, setNoteTitle] = React.useState(note.title);
  /*  const [noteContent, setNoteContent] = React.useState(note.body);
  const [userId, setUserId] = React.useState(note.userId); */

  const handleChange = (event: any) => {
    setNoteTitle(event.target.value);
  };

  const pickNote = (note: NoteObject) => {
    editNote({
      id: note.id,
      title: noteTitle,
      body: note.body,
      userId: note.userId,
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
          id="outlined-multiline-static"
          multiline
          rows="8"
          variant="outlined"
        />
        <ButtonPanel>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => pickNote(note)}
          >
            {langData[contextValue].editButton}
          </Button>
          <Typography variant="h6" gutterBottom>
            Id:
            {note.id}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletePickedNote(note.id)}
          >
            {langData[contextValue].deleteButton}
          </Button>
        </ButtonPanel>
      </InputWrap>
    </form>
  );
};

export default Edit;
