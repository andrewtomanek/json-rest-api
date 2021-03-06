export interface NoteObject {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export enum NotesActionTypes {
  GET_NOTES = "GET_NOTES",
  GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS",
  GET_NOTES_ERROR = "GET_NOTES_ERROR",
  CREATE_NOTE = "CREATE_NOTE",
  CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS",
  CREATE_NOTE_ERROR = "CREATE_NOTE_ERROR",
  EDIT_NOTE = "EDIT_NOTE",
  EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS",
  EDIT_NOTE_ERROR = "EDIT_NOTE_ERROR",
  PICK_NOTE = "PICK_NOTE",
  PICK_NOTE_SUCCESS = "PICK_NOTE_SUCCESS",
  PICK_NOTE_ERROR = "PICK_NOTE_ERROR",
  DELETE_NOTE = "DELETE_NOTE",
  DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS",
  DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR",
}
