import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Task from "./note/task";

interface INote {
  id: string;
  title: string;
  tasks: string[];
}

const CurrentNote: React.FC = () => {
  const path = useLocation();
  const [noteTitle, setNoteTitle] = useState("");
  const notes: any = useSelector<any>((state) => state.notesStore.notes);

  const id: string = path.pathname.replace(/\/notes\/note\//g, "");
  const currentNote: INote = notes.filter((note: any) => note.id === id)[0];

  useEffect(() => {
    console.log(currentNote);
    if (currentNote) {
      setNoteTitle(currentNote.title);
    }
  }, [currentNote]);

  return (
    <div>
      <main>
        <div>
          <label htmlFor={currentNote.id}>заголовок заметки: </label>
          <input
            id={currentNote.id}
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <section>
          {currentNote.tasks.length &&
            currentNote.tasks.map((task) => <Task task={task} />)}
        </section>
      </main>
    </div>
  );
};

export default CurrentNote;
