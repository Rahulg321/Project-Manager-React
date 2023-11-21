import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

function App() {
  // undefined = not selected a project and not making
  //null = not selected but making a project
  //id = selected a project

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(enteredTask) {
    setProjectState((prevState) => {
      // a task should contain a id for filtering out purposes
      const newTask = {
        id: Math.random(),
        taskName: enteredTask,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((e) => e.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,

        selectedProjectId: undefined,
        selectedProjectId: null,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  const selectedProject = projectState.projects.find(
    (e) => e.id === projectState.selectedProjectId
  );

  content = (
    <SelectedProject
      tasks={projectState.tasks}
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancelProject={handleCancelProject}
        addProject={handleAddProject}
      />
    );
  }

  console.log('in app ', projectState.projects);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
