function Navbar() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <a className="nav-brand" href="#dashboard">
        <span className="brand-mark" aria-hidden="true">✓</span>
        <span>Taskly</span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#dashboard">Home</a>
        <a className="nav-link" href="#tasks-title">My tasks</a>
      </div>
    </nav>
  );
}

export default Navbar;
