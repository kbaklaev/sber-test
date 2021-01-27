import React, { useState } from 'react'

interface INote {
  title: string;
  tasks: string[];
}

const CurrentNote: React.FC<INote> = ({ title, tasks }) => {
  const [noteTitle, setNoteTitle] = useState(title || '')

  console.log(tasks)

  return (
    <div>
      <main>
        <div>
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}  
          />
        </div>
        {/* <section>
          {
            tasks.length && tasks.map(task => (
              <span>{task}</span>
            ))
          }
        </section> */}
      </main>
    </div>
  )
}

export default CurrentNote
