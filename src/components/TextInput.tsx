import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";

interface TextInputProps {
  noteTitle: string;
  noteContent: string;
  updateNoteTitle: (value: string) => void;
  updateNoteContent: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  textInput: {
    margin: theme.spacing(1),
    width: "90%",
    height: "80%",
  },
}));

const TextInput: React.FunctionComponent<TextInputProps> = ({
  noteTitle,
  noteContent,
  updateNoteTitle,
  updateNoteContent,
}) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();

  const handleChange = (value: string) => {
    updateNoteTitle(value);
  };

  const handleNoteContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateNoteContent(event.target.value);
  };

  return (
    <>
      <TextField
        className={classes.textInput}
        label={langData[contextValue].postLabel}
        value={noteTitle}
        onChange={(e) => handleChange(e.target.value as string)}
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
    </>
  );
};

export default TextInput;
