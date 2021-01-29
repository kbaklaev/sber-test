import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteIcon, PencilIcon } from "./icons/icons";
import RemoveNoteNotification from "./notifications/removeNoteNotification";
import { INote, ITask } from "./types";
import Modal from "react-modal";

interface INoteCardProps {
  note: INote;
}

const NoteCard: React.FC<INoteCardProps> = ({ note }) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const removeNoteHandler = (): void => openModal();

  const editNoteHandler = (): void => {
    history.push(`/notes/note/${note.id}`);
  };

  return (
    <div className="note-card">
      <header className="note-card__header">
        <h2 className="note-card heading">{note.title}</h2>
        <button
          type="button"
          title="Редактировать заметку"
          className="round-button"
          onClick={() => editNoteHandler()}
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          title="Удалить заметку"
          className="round-button red"
          onClick={() => removeNoteHandler()}
        >
          <DeleteIcon />
        </button>
      </header>
      <main>
        <ul>
          {note.tasks.length
            ? note.tasks.map(
                (task: ITask) =>
                  task.title && (
                    <li
                      key={task.id}
                      className={task.isDone ? "task-done" : ""}
                    >
                      {task.title}
                    </li>
                  )
              )
            : null}
        </ul>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal__remove"
        ariaHideApp={false}
      >
        <RemoveNoteNotification note={note} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default NoteCard;
