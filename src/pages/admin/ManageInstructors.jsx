export default function ManageInstructors() {
  const instructors = [
    { id: 1, name: "John Doe", email: "john@example.com", courses: 4 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", courses: 2 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Manage Instructors</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-indigo-600 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Courses</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((i) => (
            <tr key={i.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{i.id}</td>
              <td className="p-3">{i.name}</td>
              <td className="p-3">{i.email}</td>
              <td className="p-3">{i.courses}</td>
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
