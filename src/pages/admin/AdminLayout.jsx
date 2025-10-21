import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

export default function AdminLayout() {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo || userInfo.user.role !== "admin") {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-red-600 text-xl font-semibold">
          Access Denied: Admins Only
        </h2>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 pt-14">
      <Sidebar role={userInfo?.user?.role || "admin"} />
      <div className="flex-1 ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
}
