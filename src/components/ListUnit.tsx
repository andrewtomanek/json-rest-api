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
  padding: 0rem;
  width: 100%;
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
      padding: "0.5rem",
    },
    listBox: {
      display: "flex",
      flexFlow: "row wrap",
      backgroundColor: "white",
      color: "var(--blue)",
    },
    listText: {
      padding: "0rem 1rem",
      fontSize: "1.1rem",
    },
  }));
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <NoteText className={classes.listBox}>
        <Typography className={classes.listText} variant="h6" gutterBottom>
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
