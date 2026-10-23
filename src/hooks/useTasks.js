import { useState } from 'react';
import initialTasks from '../data/initialTasks';

function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');

  const filteredTasks =
    filter === 'All'
      ? tasks
      : tasks.filter((task) => task.status === filter);
  const pendingCount = tasks.filter((task) => task.status === 'Pending').length;
  const completedCount = tasks.filter(
    (task) => task.status === 'Completed',
  ).length;

  function addTask(title) {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return false;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        priority: 'Medium',
        description: 'No description added',
        status: 'Pending',
      },
    ]);

    return true;
  }

  function completeTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task,
      ),
    );
  }

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    pendingCount,
    completedCount,
    addTask,
    completeTask,
  };
}

export { useTasks };
