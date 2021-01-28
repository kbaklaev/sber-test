import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

interface IRemoveNoteNotification {
  id: string;
}

const RemoveNoteNotification: React.FC<IRemoveNoteNotification> = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const removeNoteHandler = () => {
    console.log("удаление заметки");
  };

  return (
    <div>
      <h3>удалить заметку?</h3>
      <button type="button" onClick={removeNoteHandler}>
        удалить
      </button>
      <button
        type="button"
        onClick={() => console.log("закрыть модальное окно")}
      >
        отмена
      </button>
    </div>
  );
};

export default RemoveNoteNotification;
