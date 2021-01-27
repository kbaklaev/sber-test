import React from "react";
import { useHistory } from 'react-router-dom'

interface INoteCard {
  id: string;
  title: string;
  tasks: string[];
}

const NoteCard: React.FC<INoteCard> = ({ id, title, tasks }) => {
  const history = useHistory()

  const editNoteHandler = () => {
    history.push(`/notes/note/${id}`)
  }

  return (
    <div className="note-card">
      <header className="note-card__header">
        <h2 className="note-card heading">{title}</h2>
        <button
          type="button"
          className="note-card__header__button"
          onClick={() => editNoteHandler()}
        >
          изменить
        </button>
      </header>
      <ul>
        {tasks.length &&
          tasks.map((task, index: number) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  );
};

export default NoteCard;
