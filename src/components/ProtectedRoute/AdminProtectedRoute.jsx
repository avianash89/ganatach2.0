import { useAuth } from "../../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const { admin } = useAuth(); // get admin data from AuthContext

  if (!admin) {
    // if no admin is logged in, redirect to login page
    return <Navigate to="/admin-login" replace />;
  }

  // if logged in, show the page
  return children;
}
