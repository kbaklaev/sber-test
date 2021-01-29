import React from "react";
import { useHistory } from "react-router-dom";

interface ICallback {
  (): void;
}

interface INoteButtons {
  setNoteToStoreCallback: ICallback;
  addTaskHandlerCallback: ICallback;
  cancelChangesCallback: ICallback;
}

const NoteButtons: React.FC<INoteButtons> = ({
  setNoteToStoreCallback,
  addTaskHandlerCallback,
  cancelChangesCallback,
}) => {
  const history = useHistory();

  const addTaskHandler = (): void => {
    addTaskHandlerCallback();
  };

  const setNoteToStoreHandler = (): void => {
    setNoteToStoreCallback();
  };

  const cancelChangesHandler = (): void => {
    cancelChangesCallback();
  };

  return (
    <div className="note__buttons">
      <button type="button" onClick={addTaskHandler}>
        Новая задача
      </button>
      <button type="button" onClick={setNoteToStoreHandler}>
        Сохранить изменения
      </button>
      <button type="button" onClick={cancelChangesHandler}>
        Отменить изменения
      </button>
    </div>
  );
};

export default NoteButtons;
