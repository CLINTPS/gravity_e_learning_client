export default function ManageStudents() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", enrolledCourses: 3 },
    { id: 2, name: "Bob Williams", email: "bob@example.com", enrolledCourses: 2 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Manage Students</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-indigo-600 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Enrolled Courses</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{s.id}</td>
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.email}</td>
              <td className="p-3">{s.enrolledCourses}</td>
              <td className="p-3 space-x-2">
                <button className="px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">View</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
