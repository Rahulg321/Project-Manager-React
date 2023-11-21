import React from 'react';
import NewTask from './NewTask';
import Button from './Button';

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-md  text-stone-600 my-4">
          This project does not have any tasks
        </p>
      )}
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className="flex gap-2 mb-3">
              <p>{task.taskName}</p>
              <button
                className="rounded-md text-sm py-1 px-2 bg-red-600 text-stone-50 hover:bg-red-800 "
                onClick={() => {
                  onDelete(task.id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tasks;
