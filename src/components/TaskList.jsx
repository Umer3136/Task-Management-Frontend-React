import TaskCard from './TaskCard';

function TaskList({ tasks, onComplete }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-state">
        No tasks here yet. Add a task to get started.
      </p>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          description={task.description}
          status={task.status}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
