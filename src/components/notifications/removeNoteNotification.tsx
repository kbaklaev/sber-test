import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ICLoseModal, INote } from "../types";
import { removeNote } from "../../redux/actions";
interface IRemoveNoteNotification {
  note: INote;
  closeModal: ICLoseModal;
}

const RemoveNoteNotification: React.FC<IRemoveNoteNotification> = ({
  note,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const removeNoteHandler = () => {
    dispatch(removeNote(note));
    const existNotesString: string = localStorage.getItem("notes") || "[]";
    const existNotes: INote[] = JSON.parse(existNotesString);
    localStorage.setItem(
      "notes",
      JSON.stringify(
        existNotes.filter((keepNote: INote) => keepNote.id !== note.id)
      )
    );
    history.push('/notes');
  };

  return (
    <>
      <h3>удалить заметку?</h3>
      <div className="modal__remove__buttons_container">
        <button type="button" onClick={removeNoteHandler}>
          удалить
        </button>
        <button type="button" onClick={() => closeModal()}>
          отмена
        </button>
      </div>
    </>
  );
};

export default RemoveNoteNotification;
