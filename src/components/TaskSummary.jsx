function TaskSummary({ total, pending, completed }) {
  return (
    <div className="task-summary">
      <div className="summary-card summary-total">
        <h3>Total Tasks</h3>
        <p>{total}</p>
      </div>
      <div className="summary-card summary-pending">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
      <div className="summary-card summary-completed">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>
    </div>
  );
}

export default TaskSummary;
