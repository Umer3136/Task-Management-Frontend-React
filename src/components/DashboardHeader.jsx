function DashboardHeader({ username, count, onIncrement }) {
  return (
    <header className="page-header" id="dashboard">
      <div className="header-copy">
        <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
        <h1>Task Manager</h1>
        <p>Welcome back, {username}. Make today count.</p>
      </div>
      <div className="counter-widget">
        <span>Practice counter</span>
        <button
          className="counter-button"
          onClick={onIncrement}
          type="button"
        >
          Count <strong>{count}</strong>
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
