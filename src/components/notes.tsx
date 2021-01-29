import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { PlusIcon } from "./icons/icons";
import NoteCard from "./noteCard";
import { INote, IUseSelector } from "./types";
import Modal from "react-modal";
import NewNoteNotification from "./notifications/addNewNoteNotification";

const Notes: React.FC = () => {
  const notes = useSelector((state: IUseSelector) => state.notesStore.notes);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const addNewNoteHandler = (): void => openModal();

  return (
    <div>
      <main className="notes__main">
        {notes.length ? (
          notes.map((note: INote) => (
            <React.Fragment key={note.id}>
              <NoteCard note={note} />
            </React.Fragment>
          ))
        ) : (
          <div className="empty">
            <h2>
              У вас пока что нет созданных заметок, нажмите на кнопку внизу
              страницы для того, чтобы создать новую.
            </h2>
          </div>
        )}
      </main>
      <button
        type="button"
        title="Добавить новую заметку"
        className="round-button notes__add-button"
        onClick={addNewNoteHandler}
      >
        <PlusIcon />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal__remove"
        ariaHideApp={false}
      >
        <NewNoteNotification closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Notes;
