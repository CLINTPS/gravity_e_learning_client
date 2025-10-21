import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
   <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Courses</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">24</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">320</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Instructors</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
        </div>
      </div>
    </div>
  );
}
