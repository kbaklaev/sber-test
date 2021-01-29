import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../../redux/actions";
import { ICLoseModal } from "../types";

interface INewNoteNotification {
  closeModal: ICLoseModal;
}

const NewNoteNotification: React.FC<INewNoteNotification> = ({
  closeModal,
}) => {
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
    <>
      <h3>создать новую заметку</h3>
      <div className="modal_remove__buttons_container">
        <button type="button" onClick={addNewNoteHandler}>
          создать
        </button>
        <button type="button" onClick={() => closeModal()}>
          отмена
        </button>
      </div>
    </>
  );
};

export default NewNoteNotification;
