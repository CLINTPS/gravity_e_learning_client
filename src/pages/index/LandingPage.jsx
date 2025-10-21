import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

export default function LandingPage() {
  const featuredCourses = [
    { _id: 1, title: "React for Beginners", description: "Learn React from scratch", price: 49 },
    { _id: 2, title: "Node.js Mastery", description: "Build backend APIs", price: 59 },
    { _id: 3, title: "MongoDB Deep Dive", description: "Master NoSQL databases", price: 39 },
  ];

  return (
    <div className="text-center py-12 px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-3">Welcome to Cokonet Academy</h1>
      <p className="text-gray-600 mb-6">Learn new skills and build your future with us.</p>
      <Link
        to="/courses"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Explore Courses
      </Link>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {featuredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
