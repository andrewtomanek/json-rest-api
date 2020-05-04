import { action } from "typesafe-actions";
import { NotesActionTypes } from "../reducers/types";

export const getNotes = () => action(NotesActionTypes.GET_NOTES);

export const postNotes = (note: { id: number; title: string }) =>
  action(NotesActionTypes.CREATE_NOTE, note);

export const getPickedNote = (id: number) =>
  action(NotesActionTypes.PICK_NOTE, id);

export const editPickedNote = (note: { id: number; title: string }) =>
  action(NotesActionTypes.EDIT_NOTE, note);

export const deleteNoteById = (id: number) =>
  action(NotesActionTypes.DELETE_NOTE, id);
