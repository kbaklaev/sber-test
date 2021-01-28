import React, { useEffect, useState } from "react";
import { DeleteIcon } from "../icons/icons";
import { ITask } from "../types";

interface ITaskProps {
  task: ITask;
  removeTaskCallback: any;
  setTaskCallback: any;
}

const Task: React.FC<ITaskProps> = ({
  task,
  removeTaskCallback,
  setTaskCallback,
}) => {
  const [currentTask, setCurrentTask] = useState(task);

  useEffect(() => {
    if (JSON.stringify(currentTask) !== JSON.stringify(task)) {
      setTaskCallback(currentTask);
    }
  }, [currentTask, setTaskCallback, task]);

  const removeTaskCallbackHandler = () => {
    removeTaskCallback(task.id);
  };

  const setTaskTitle = (title: string) => {
    setCurrentTask((currentTask) => ({ ...currentTask, title: title }));
  };

  const setTaskDone = () => {
    setCurrentTask((currentTask) => ({
      ...currentTask,
      isDone: !currentTask.isDone,
    }));
  };

  return (
    <div className="task">
      <label className="task__checkbox__container" title="Не-/выполнено">
        <input
          type="checkbox"
          defaultChecked={currentTask.isDone}
          onChange={setTaskDone}
        />
        <span className="task__checkbox" />
      </label>
      <input
        type="text"
        title="Редактировать задачу"
        value={currentTask.title}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Задача"
        className="task__input"
      />
      <button
        type="button"
        title="Удалить задачу"
        onClick={removeTaskCallbackHandler}
        className="task__remove_button"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Task;
