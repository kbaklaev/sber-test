import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../../redux/actions";

const NewNoteNotification: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewNoteHandler = () => {
    const newId: string = uuidv4();
    dispatch(
      addNote({
        id: newId,
        title: "",
        tasks: [{ id: uuidv4(), title: "", isDone: false }],
      })
    );
    history.push(`/notes/note/${newId}`);
  };

  return (
    <div>
      <h3>создать новую заметку</h3>
      <button type="button" onClick={addNewNoteHandler}>
        создать
      </button>
      <button type="button" onClick={() => history.goBack()}>
        отмена
      </button>
    </div>
  );
};

export default NewNoteNotification;
