import { useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import Navbar from './components/Navbar';
import TaskFilters from './components/TaskFilters';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary';
import { useTasks } from './hooks/useTasks';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    pendingCount,
    completedCount,
    addTask,
    completeTask,
  } = useTasks();

  return (
    <div className="app-container">
      <div className="dashboard-shell">
        <Navbar />
        <DashboardHeader
          username="Umer"
          count={count}
          onIncrement={() => setCount((currentCount) => currentCount + 1)}
        />

        <main>
          <section className="tasks-section" aria-labelledby="tasks-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">OVERVIEW</p>
                <h2 id="tasks-title">My tasks</h2>
              </div>
              <span className="task-total">{tasks.length} total</span>
            </div>

            <TaskSummary
              total={tasks.length}
              pending={pendingCount}
              completed={completedCount}
            />
            <TaskForm onAddTask={addTask} />
            <TaskFilters filter={filter} onChange={setFilter} />
            <TaskList tasks={filteredTasks} onComplete={completeTask} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
