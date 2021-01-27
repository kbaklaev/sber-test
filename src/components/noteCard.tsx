import React from "react";

interface INoteCard {
  title: string;
  tasks: string[];
}

const NoteCard: React.FC<INoteCard> = ({ title, tasks }) => {
  return (
    <div className="note-card">
      <header className="note-card__header">
        <h2 className="note-card heading">{title}</h2>
        <button type="button" className="note-card__header__button">
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
