export default function ManageCourses() {
  const courses = [
    { id: 1, name: "React Fundamentals", instructor: "John Doe", students: 45 },
    { id: 2, name: "Node.js API Mastery", instructor: "Jane Smith", students: 32 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Manage Courses</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-indigo-600 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Course Name</th>
            <th className="p-3">Instructor</th>
            <th className="p-3">Students</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.instructor}</td>
              <td className="p-3">{c.students}</td>
              <td className="p-3 space-x-2">
                <button className="px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Edit</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
