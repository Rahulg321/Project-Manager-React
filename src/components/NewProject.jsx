import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

const NewProject = ({ addProject, onCancelProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const errorModal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation.....

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      //show the modal
      errorModal.current.open();
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={errorModal} ButtonText="Okay">
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please add a title description and a due date
        </p>
        <p className="text-stone-600 mb-4">
          Provide a valid value so we can add
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className=" text-stone-700 hover:text-stone-900"
              onClick={onCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 rounded-md px-6 py-3 text-stone-50 hover:bg-stone-950 hover:text-stone-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="title" />
          <Input ref={description} label="description" textarea={true} />
          <Input type="date" ref={dueDate} label="due date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
