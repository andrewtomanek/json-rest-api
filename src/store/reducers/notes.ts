import { Reducer } from "redux";
import { NotesActionTypes } from './types'


type defautState = { notesArray: [] };

const initialState: defautState = {
  notesArray: []
};

const notesReducer: Reducer = (state = initialState, action) => {
  const response = action.response;
  switch (action.type) {
    case NotesActionTypes.GET_NOTES_SUCCESS:
      return { ...state, notesArray: [...response] };
    case NotesActionTypes.CREATE_NOTE_SUCCESS:
      return { ...state, notesArray: [...state.notesArray, response] };
    case NotesActionTypes.PICK_NOTE_SUCCESS:
      return { ...state };
    case NotesActionTypes.DELETE_NOTE_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};

export default notesReducer;
