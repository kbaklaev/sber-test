import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { INote } from "../types";
import { removeNote } from "../../redux/actions";

interface ICLoseModal {
  (): void;
}
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
    let tempNotes = JSON.parse(localStorage.getItem("notes") || "");
    localStorage.setItem(
      "notes",
      JSON.stringify(
        tempNotes.notes.filter((tempNote: INote) => tempNote.id !== note.id)
      )
    );
    history.goBack();
  };

  return (
    <>
      <h3>удалить заметку?</h3>
      <div className="modal_remove__buttons_container">
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
