import { combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";
import notesReducer from "./notes";

const rootReducer = (history: History) =>
  combineReducers({
    notes: notesReducer,
    router: connectRouter(history)
  });

  export interface NotesState {
  notesArray: { id: number; title: string }[];
}
export interface State {
  notes: NotesState;
  router: RouterState;
}

export default rootReducer;
