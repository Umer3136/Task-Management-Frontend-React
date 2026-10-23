const FILTERS = ['All', 'Pending', 'Completed'];

function TaskFilters({ filter, onChange }) {
  return (
    <div className="task-filters" role="group" aria-label="Filter tasks">
      {FILTERS.map((taskFilter) => (
        <button
          key={taskFilter}
          type="button"
          onClick={() => onChange(taskFilter)}
          className={
            filter === taskFilter
              ? 'filter-button active-filter'
              : 'filter-button'
          }
          aria-pressed={filter === taskFilter}
        >
          {taskFilter}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
