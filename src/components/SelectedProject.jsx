import Button from './Button';
import Tasks from './Tasks';

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={() => onDelete(project.id)}>Delete</Button>
        </div>

        <p className="mb-3 text-stone-400">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
