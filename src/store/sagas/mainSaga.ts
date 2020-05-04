import { put, call } from "redux-saga/effects";
import {
  uploadNote,
  updateNote,
  getAllNotes,
  retrieveNote,
  deleteNote
} from "../../services/sagaService";

import { NotesActionTypes } from "../reducers/types";

interface NotePayload {
  payload: { id: number; title: string };
  type: string;
}

interface NoteIdPayload {
  payload: number;
  type: string;
}

export function* getNotesSaga() {
  try {
    const response = yield call(getAllNotes);
    yield put({ type: NotesActionTypes.GET_NOTES_SUCCESS, response });
  } catch (error) {
    yield put({ type: NotesActionTypes.GET_NOTES_ERROR, error });
  }
}

export function* pickSaga(payload: NoteIdPayload) {
  try {
    const response = yield call(retrieveNote, payload);
    yield put({ type: NotesActionTypes.PICK_NOTE_SUCCESS, response });
  } catch (error) {
    yield put({ type: NotesActionTypes.PICK_NOTE_ERROR, error });
  }
}

export function* createNote(payload: NotePayload) {
  try {
    const response = yield call(uploadNote, payload);
    yield put({ type: NotesActionTypes.CREATE_NOTE_SUCCESS, response });
  } catch (error) {
    yield put({ type: NotesActionTypes.CREATE_NOTE_ERROR, error });
  }
}

export function* editNoteSaga(payload: NotePayload) {
  try {
    const response = yield call(updateNote, payload);
    yield put({ type: NotesActionTypes.EDIT_NOTE_SUCCESS, response });
  } catch (error) {
    yield put({ type: NotesActionTypes.EDIT_NOTE_ERROR, error });
  }
}

export function* deleteSaga(payload: NoteIdPayload) {
  try {
    const response = yield call(deleteNote, payload);
    yield put({ type: NotesActionTypes.DELETE_NOTE_SUCCESS, response });
  } catch (error) {
    yield put({ type: NotesActionTypes.DELETE_NOTE_ERROR, error });
  }
}
