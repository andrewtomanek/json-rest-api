import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  getPickedNote,
  editPickedNote,
  deleteNoteById,
} from "../store/actions/notes";
import { State } from "../store/reducers";
import ListUnit from "./ListUnit";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import { NoteObject } from "../store/reducers/types";
import styled from "styled-components";

interface ListProps {
  notes: { id: number; title: string; body: string; userId: number }[];
}
interface DispatchProps {
  getPickedNote: (id: number) => any;
  editPickedNote: (note: NoteObject) => any;
  deleteNoteById: (id: number) => any;
}

const CustomList = styled(List)`
  width: 100%;
`;

const ListComponent: React.FunctionComponent<ListProps & DispatchProps> = (
  props
) => {
  const pickNote = (id: number) => {
    props.getPickedNote(id);
  };

  const editNote = (note: NoteObject) => {
    props.editPickedNote(note);
  };

  const deletePickedNote = (id: number) => {
    props.deleteNoteById(id);
  };
  return (
    <CustomList>
      {props.notes && props.notes.length > 1 ? (
        props.notes.map((note) => {
          return (
            <ListUnit
              key={note.id}
              note={note}
              pickNote={pickNote}
              editNote={editNote}
              deletePickedNote={deletePickedNote}
            />
          );
        })
      ) : (
        <ListItem>
          <Typography variant="h4">loading...</Typography>
        </ListItem>
      )}
    </CustomList>
  );
};

const mapStateToProps = (state: State) => ({
  notes: state.notes.notesArray,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPickedNote: (id: number) => dispatch(getPickedNote(id)),
  editPickedNote: (note: NoteObject) => dispatch(editPickedNote(note)),
  deleteNoteById: (id: number) => dispatch(deleteNoteById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
