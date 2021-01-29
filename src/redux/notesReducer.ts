import { INotes } from './../components/types.d';
import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./actions";
import { IAction, INote } from "../components/types";

const existNotesString: string = localStorage.getItem("notes") || "[]";
const existNotes: INote[] = JSON.parse(existNotesString) || [];

console.log(existNotes)

const initialState: INotes = { notes: existNotes };

const notesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.filter((note) => note.id !== action.payload.id),
          action.payload,
        ],
      };

    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default notesReducer;
