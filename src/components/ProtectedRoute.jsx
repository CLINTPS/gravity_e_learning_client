import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userInfo.user.role)) {
    return <Navigate to="/" />;
  }

  return children;
}
