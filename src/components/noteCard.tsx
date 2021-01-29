import React from "react";
import { useHistory } from "react-router-dom";
import { PencilIcon } from "./icons/icons";
import { INote, ITask } from "./types";

interface INoteCardProps {
  note: INote;
}

const NoteCard: React.FC<INoteCardProps> = ({ note }) => {
  const history = useHistory();

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
    </div>
  );
};

export default NoteCard;
