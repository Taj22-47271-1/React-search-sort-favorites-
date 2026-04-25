import PropTypes from "prop-types";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
  isFavorite,
  onFavoriteToggle,
}) {
  const colors = ["#4f46e5", "#0891b2", "#16a34a", "#ea580c"];

  return (
    <div className="student-card">
      <img src={avatar} alt={name} />

      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Major: {major}</p>

      <div className="card-stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Courses" value={courses.length} />
      </div>

      <div className="course-list">
        {courses.map((course, index) => (
          <CourseTag
            key={course}
            courseName={course}
            color={colors[index % colors.length]}
          />
        ))}
      </div>

      <button
        className={isFavorite ? "favorite-btn active" : "favorite-btn"}
        onClick={() => onFavoriteToggle(id)}
      >
        {isFavorite ? "★ Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default StudentCard;