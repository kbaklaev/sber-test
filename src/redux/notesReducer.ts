import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./actions";
import { IAction, INotes } from "../components/types";

const initialState: INotes = {
  notes: [
    {
      id: "1",
      title: "тестовая заметка",
      tasks: [
        {
          id: "1",
          title: "задача 1",
          isDone: true,
        },
        {
          id: "2",
          title: "задача 2",
          isDone: false,
        },
      ],
    },
  ],
};

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
