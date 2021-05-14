import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "./Modal";
import Edit from "../components/Edit";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { NoteObject } from "../store/reducers/types";
import styled from "styled-components";

interface UnitProps {
  note: NoteObject;
  pickNote: (id: number) => any;
  editNote: (note: NoteObject) => any;
  deletePickedNote: (id: number) => any;
}

const NoteText = styled(Card)`
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  color: var(--blue);
  padding: 1rem 0;
  box-shadow: none;
`;

const ListUnit: React.FunctionComponent<UnitProps> = ({
  note,
  pickNote,
  editNote,
  deletePickedNote,
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "white",
      padding: "0.5rem 2rem 1rem",
      margin: "2rem 0",
    },
    listNumber: {
      paddingRight: "1rem",
      fontSize: "1rem",
      color: "var(--grey)",
    },

    listText: {
      fontSize: "1rem",
    },
  }));
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <NoteText>
        <Typography className={classes.listNumber} variant="h6" gutterBottom>
          {note.id}.
        </Typography>
        <Typography className={classes.listText} variant="h6" gutterBottom>
          {note.title}
        </Typography>
      </NoteText>
      <Modal noteId={note.id} pickNote={pickNote}>
        <Edit
          note={note}
          editNote={editNote}
          deletePickedNote={deletePickedNote}
        />
      </Modal>
    </ListItem>
  );
};

export default ListUnit;
