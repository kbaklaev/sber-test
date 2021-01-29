import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { updateNote, removeNote } from "../redux/actions";
import { BackIcon, DeleteIcon } from "./icons/icons";
import NoteButtons from "./note/noteButtons";
import Task from "./note/task";
import RemoveNoteNotification from "./notifications/removeNoteNotification";
import { INote, ITask, IUseSelector } from "./types";

const initialNote: INote = {
  id: "",
  title: "",
  tasks: [],
};

const CurrentNote: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const path = useLocation();
  const notes = useSelector((state: IUseSelector) => state.notesStore.notes);
  const id: string = path.pathname.replace(/(\/notes?){2}\//g, "");
  const currentNote: INote = notes.filter((note: INote) => note.id === id)[0];
  const [note, setNote] = useState(currentNote || initialNote);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const removeNoteHandler = (): void => openModal();

  const addTaskHandler = () => {
    setNote((note) => ({
      ...note,
      tasks: [...note.tasks, { id: uuidv4(), title: "", isDone: false }],
    }));
  };

  const removeTaskCallback = (id: string) => {
    setNote((note) => ({
      ...note,
      tasks: note.tasks.filter((task) => task.id !== id),
    }));
  };

  const setTaskCallback = (currentTask: ITask) => {
    setNote((note) => ({
      ...note,
      tasks: note.tasks.map((task) =>
        task.id === currentTask.id
          ? { ...task, title: currentTask.title, isDone: currentTask.isDone }
          : task
      ),
    }));
  };

  const setTitle = (title: string) => {
    setNote((note) => ({ ...note, title: title }));
  };

  const setNoteToStore = () => {
    dispatch(updateNote(note));
    const existNotesString: string = localStorage.getItem("notes") || "[]";
    const existNotes: INote[] = JSON.parse(existNotesString);
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...existNotes.filter((existNote) => existNote.id !== note.id),
        note,
      ])
    );
    history.goBack();
  };

  const cancelChangesHandler = () => {
    if (!note.title) {
      dispatch(removeNote(note));
    }
    history.goBack();
  };

  return (
    <main className="note-card" id="current-note">
      <div>
        <h3>заголовок: </h3>
        <div className="note-card__title">
          <input
            id={note.id}
            type="text"
            title="Редактировать заголовок заметки"
            value={note.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Имя заметки"
            className="title-input"
          />
          <button
            type="button"
            title="Удалить заметку"
            onClick={removeNoteHandler}
            className="task__remove_button"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <section>
        <h3>задачи:</h3>
        {note.tasks.length ? (
          note.tasks.map((task: ITask) => (
            <React.Fragment key={task.id}>
              <Task
                task={task}
                removeTaskCallback={removeTaskCallback}
                setTaskCallback={(task: ITask) => setTaskCallback(task)}
              />
            </React.Fragment>
          ))
        ) : (
          <span>нет задач</span>
        )}
      </section>
      <NoteButtons
        setNoteToStoreCallback={setNoteToStore}
        addTaskHandlerCallback={addTaskHandler}
        cancelChangesCallback={cancelChangesHandler}
      />
      <button
        type="button"
        title="Вернуться к списку заметок без сохранения изменений"
        className="round-button notes_back_button"
        onClick={cancelChangesHandler}
      >
        <BackIcon />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal_remove"
        ariaHideApp={false}
      >
        <RemoveNoteNotification note={note} closeModal={closeModal} />
      </Modal>
    </main>
  );
};

export default CurrentNote;
