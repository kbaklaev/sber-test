import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux/actions'
import NoteCard from "./noteCard";

interface INote {
  title: string;
  tasks: string[];
}

const Notes: React.FC = () => {
  const dispatch = useDispatch()
  const notes: any = useSelector<any>(state => state.notesStore.notes)

  const addNewNoteHandler = () => {
    console.log('click')
    dispatch(addNote({ title: 'тестовая заметка 2', tasks: [] }))
  }

  return (
    <div>
      <main className="notes_main">
        {
          notes.length && notes.map((note: INote, index: number) => (
            <React.Fragment key={index}>
              <NoteCard title={note.title} tasks={note.tasks} />
            </React.Fragment>
          ))
        }
      </main>
      <button
        type="button"
        onClick={addNewNoteHandler}
      >
        add
      </button>
    </div>
  );
};

export default Notes;
