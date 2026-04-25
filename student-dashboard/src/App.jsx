import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import tajImage from "./assets/taj.png";
import rahimImage from "./assets/images.jpg"; // Adjust the path as needed
function App() {
  const students = [
    
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
  }
];
   

  return (
    <div className="app">
      <DashboardHeader />

      <section className="summary">
        <StatBadge label="Total Students" value={students.length} />
        <StatBadge label="Average GPA" value="3.7" />
      </section>

      <section className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </section>
    </div>
  );
}

export default App;