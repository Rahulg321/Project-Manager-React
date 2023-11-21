import Button from './Button';
import noProject from '../assets/no-projects.png';

const NoProjectSelected = ({ onAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProject}
        alt="without a project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="font-bold text-stone-900 text-xl">No Project Selected</h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Add a project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
