import Button from './Button';

const Sidebar = ({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  console.log('projects', projects);

  return (
    <aside className="w-1/3 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">
        Your project sidebar
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((e) => {
          console.log(e);
          let cssClasses =
            'w-full text-left px-2 py-3 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800';
          if (selectedProjectId === e.id) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400';
          }

          console.log('eid', e.id);

          return (
            <li key={e.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(e.id)}
              >
                {e.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
