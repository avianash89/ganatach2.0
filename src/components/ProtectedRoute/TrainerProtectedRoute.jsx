import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"; // ✅ import correctly

export default function TrainerProtectedRoute({ children }) {
  const { trainer, loading } = useAuth(); // ✅ access from AuthContext

  if (loading) return <div>Loading...</div>;

  // ✅ If trainer is NOT logged in → redirect to login
  if (!trainer) return <Navigate to="/trainer-login" replace />;

  // ✅ If logged in → show the protected page
  return children;
}
