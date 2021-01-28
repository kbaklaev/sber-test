import React from "react";
import { useHistory } from "react-router-dom";

interface ICallback {
  (): void;
}

interface INoteButtons {
  setNoteToStoreCallback: ICallback;
  addTaskHandlerCallback: ICallback;
}

const NoteButtons: React.FC<INoteButtons> = ({
  setNoteToStoreCallback,
  addTaskHandlerCallback,
}) => {
  const history = useHistory();

  const addTaskHandler = (): void => {
    addTaskHandlerCallback();
  };

  const setNoteToStoreHandler = (): void => {
    setNoteToStoreCallback();
  };

  return (
    <div className="note__buttons">
      <button type="button" onClick={addTaskHandler}>
        Новая задача
      </button>
      <button type="button" onClick={setNoteToStoreHandler}>
        Сохранить изменения
      </button>
      <button type="button" onClick={() => history.goBack()}>
        Отменить изменения
      </button>
    </div>
  );
};

export default NoteButtons;
