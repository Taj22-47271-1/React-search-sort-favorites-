import PropTypes from "prop-types";

function DashboardHeader({ totalFavorites }) {
  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <p>React Lab 02 — State, Effects and Interactivity</p>

      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
        <a href="#">Profile</a>
        <span>Favorites: {totalFavorites}</span>
      </nav>
    </header>
  );
}

DashboardHeader.propTypes = {
  totalFavorites: PropTypes.number.isRequired,
};

export default DashboardHeader;