import { useSelector } from "react-redux";

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  const role = userInfo?.user?.role;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        Welcome, {userInfo?.user?.name}
      </h2>
      <p className="text-gray-600">
        You are logged in as <span className="font-semibold">{role}</span>.
      </p>

      {role === "student" && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Your Enrolled Courses</h3>
          <p>Coming soon...</p>
        </div>
      )}
    </div>
  );
}
