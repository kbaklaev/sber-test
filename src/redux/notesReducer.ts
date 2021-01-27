import { ADD_NOTE } from "./actions";

interface INote {
  id: string,
  title: string;
  tasks: string[];
}

interface INotes {
  notes: INote[];
}

interface IAction {
  type: string;
  payload: object;
}

const initialState: INotes = {
  notes: [
    {
      id: '1',
      title: "тестовая заметка",
      tasks: ["задача 1", "задача 2"],
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
    default:
      return state;
  }
};

export default notesReducer;
