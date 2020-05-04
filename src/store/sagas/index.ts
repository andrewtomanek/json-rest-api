import { fork } from "redux-saga/effects";
import {
  watchNoteCreation,
  watchNoteEdit,
  watchRetrieveNodes,
  watchPickedNote,
  watchNoteDeletion
} from "./watchers";

export default function* startForman() {
  yield fork(watchNoteCreation);
  yield fork(watchNoteEdit);
  yield fork(watchPickedNote);
  yield fork(watchNoteDeletion);
  yield fork(watchRetrieveNodes);
}
