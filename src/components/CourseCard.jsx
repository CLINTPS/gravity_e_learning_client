import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={course.image || "/placeholder-course.jpg"}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{course.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-indigo-600 font-medium">${course.price}</span>
        <Link
          to={`/courses/${course._id}`}
          className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
        >
          View
        </Link>
      </div>
    </div>
  );
}
