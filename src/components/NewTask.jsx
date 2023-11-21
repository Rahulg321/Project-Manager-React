import { useState } from 'react';

const NewTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function taskSubmitHandler() {
    onAdd(task);
    setTask('');
  }

  return (
    <div className="flex items-center gap-5 mb-5">
      <input
        type="text"
        value={task}
        className="w-64  px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
      />
      <button
        onClick={taskSubmitHandler}
        className="rounded-md px-4 py-1 bg-slate-600  text-stone-50  hover:bg-slate-900"
      >
        +Add Task
      </button>
    </div>
  );
};

export default NewTask;
