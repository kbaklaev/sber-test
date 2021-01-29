export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}
export interface INote {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface INotes {
  notes: INote[];
}

export interface IAction {
  type: string;
  payload: INote;
}

export interface IActionInitialState {
  type: string,
  payload: INotes
}

export interface IUseSelector {
  notesStore: INotes;
}

export interface ICLoseModal {
  (): void;
}
