import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const wasAdded = onAddTask(title);

    if (wasAdded) {
      setTitle('');
    }
  }

  return (
    <form className="task-entry" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="New task title"
        placeholder="What needs to get done?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="add-task-button" type="submit">
        <span aria-hidden="true">+</span> Add task
      </button>
    </form>
  );
}

export default TaskForm;
