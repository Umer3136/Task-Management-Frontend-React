function TaskCard({ title, priority, description, status, onComplete }) {
  const completed = status === 'Completed';

  return (
    <article className={`task-card ${completed ? 'is-completed' : ''}`}>
      <div className="task-card-copy">
        <div className="task-card-heading">
          <h3>{title}</h3>
          <span className={`priority-badge priority-${priority.toLowerCase()}`}>
            {priority}
          </span>
        </div>
        <p className="task-description">{description}</p>
        <span className={`status-badge status-${status.toLowerCase()}`}>
          <span className="status-dot" aria-hidden="true" />
          {status}
        </span>
      </div>
      <button
        className="complete-button"
        onClick={onComplete}
        disabled={completed}
        type="button"
      >
        {completed ? 'Completed' : 'Mark complete'}
      </button>
    </article>
  );
}

export default TaskCard;
