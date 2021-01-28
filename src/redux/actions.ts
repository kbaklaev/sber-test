import { INote } from "../components/types";

export const ADD_NOTE: string = "ADD_NOTE",
  REMOVE_NOTE: string = "REMOVE_NOTE",
  UPDATE_NOTE: string = "UPDATE_NOTE";

export const addNote = (note: INote) => {
    return {
      type: ADD_NOTE,
      payload: note,
    };
  },
  updateNote = (note: INote) => {
    return {
      type: UPDATE_NOTE,
      payload: note,
    };
  },
  removeNote = (note: INote) => {
    return {
      type: REMOVE_NOTE,
      payload: note
    }
  }
