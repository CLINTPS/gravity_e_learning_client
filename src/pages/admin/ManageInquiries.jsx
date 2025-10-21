export default function ManageInquiries() {
  const inquiries = [
    { id: 1, name: "Tom Hardy", email: "tom@example.com", message: "Need info about MERN course" },
    { id: 2, name: "Emma Watson", email: "emma@example.com", message: "Interested in React bootcamp" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Manage Inquiries</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-indigo-600 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Message</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((q) => (
            <tr key={q.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{q.id}</td>
              <td className="p-3">{q.name}</td>
              <td className="p-3">{q.email}</td>
              <td className="p-3">{q.message}</td>
              <td className="p-3">
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
