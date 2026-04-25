import { useEffect, useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import StatBadge from "./components/StatBadge";

import tajImage from "./assets/taj.png";
import rahimImage from "./assets/images.jpg";

const initialStudents = [
  {
    name: "M.H.Taj",
    id: "47271",
    avatar: tajImage,
    gpa: 3.8,
    major: "Computer Science",
    courses: ["React", "JavaScript", "CSS"],
  },
  {
    name: "Rahim Ahmed",
    id: "47272",
    avatar: rahimImage,
    gpa: 3.6,
    major: "Software Engineering",
    courses: ["Java", "Database", "HTML"],
  },
  
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialStudents);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function handleFavoriteToggle(id) {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  }

  let filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.major.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  if (sortType === "name") {
    filteredStudents = [...filteredStudents].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortType === "gpa") {
    filteredStudents = [...filteredStudents].sort((a, b) => b.gpa - a.gpa);
  }

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  return (
    <div className="app">
      <DashboardHeader totalFavorites={favoriteIds.length} />

      <section className="summary">
        <StatBadge label="Total Students" value={students.length} />
        <StatBadge label="Showing" value={filteredStudents.length} />
        <StatBadge label="Favorites" value={favoriteIds.length} />
      </section>

      <section className="controls">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <SortControls sortType={sortType} setSortType={setSortType} />
      </section>

      {loading ? (
        <div className="loader">Loading students...</div>
      ) : (
        <section className="student-grid">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                {...student}
                isFavorite={favoriteIds.includes(student.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))
          ) : (
            <p>No student found.</p>
          )}
        </section>
      )}
    </div>
  );
}

export default App;