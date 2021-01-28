import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../redux/actions";
import { PlusIcon } from "./icons/icons";
import NoteCard from "./noteCard";
import { INote } from "./types";

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notes: any = useSelector<any>((state) => state.notesStore.notes);

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
      <main className="notes_main">
        {notes.length ? (
          notes.map((note: INote) => (
            <React.Fragment key={note.id}>
              <NoteCard note={note} />
            </React.Fragment>
          ))
        ) : (
          <h2 className="empty">
            У вас пока что нет созданных заметок, нажмите на кнопку внизу
            страницы для того, чтобы создать новую.
          </h2>
        )}
      </main>
      <button
        type="button"
        title="Добавить новую заметку"
        className="round-button notes_add_button"
        onClick={addNewNoteHandler}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Notes;
