function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <p>React Lab 01 — Components, Props and Styling</p>

      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

export default DashboardHeader;