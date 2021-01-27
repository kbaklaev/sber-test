import React, { useState } from 'react'

interface ITask {
  task: string
}

const Task: React.FC<ITask> = ({ task }) => {
  const [taskText, setTaskText] = useState(task)

  return (
    <div>
      <label htmlFor={taskText}>задача</label>
      <input
        id={taskText}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
    </div>
  )
}

export default Task
