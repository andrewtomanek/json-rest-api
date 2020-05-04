import { takeLatest } from "redux-saga/effects";
import { NotesActionTypes } from '../reducers/types'
import {
  createNote,
  editNoteSaga,
  getNotesSaga,
  pickSaga,
  deleteSaga
} from "./mainSaga";


export function* watchRetrieveNodes() {
  yield takeLatest(NotesActionTypes.GET_NOTES, getNotesSaga);
}

export function* watchNoteCreation() {
  yield takeLatest(NotesActionTypes.CREATE_NOTE, createNote);
}

export function* watchNoteEdit() {
  yield takeLatest(NotesActionTypes.EDIT_NOTE, editNoteSaga);
}

export function* watchPickedNote() {
  yield takeLatest(NotesActionTypes.PICK_NOTE, pickSaga);
}

export function* watchNoteDeletion() {
  yield takeLatest(NotesActionTypes.DELETE_NOTE, deleteSaga);
}

