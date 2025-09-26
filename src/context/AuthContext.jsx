import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check login on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const studentRes = await axios.get("http://localhost:5000/api/students/check-auth", {
          withCredentials: true,
        });
        if (studentRes.data.student) setStudent(studentRes.data.student);
        else setStudent(null);
      } catch {
        setStudent(null);
      }

      try {
        const userRes = await axios.get("http://localhost:5000/api/auth/check", {
          withCredentials: true,
        });
        if (userRes.data.user) setUser(userRes.data.user);
        else setUser(null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false); // ✅ Only set loading false after both checks
      }
    };

    checkAuth();
  }, []);

  const loginWithOtp = async (role, mobile, otp) => {
    const endpoint =
      role === "student"
        ? "http://localhost:5000/api/students/verify-otp"
        : "http://localhost:5000/api/auth/verify-otp";

    const res = await axios.post(endpoint, { mobile, enteredOtp: otp }, { withCredentials: true });

    if (role === "student") {
      setStudent(res.data.student);
      setUser(null);
    } else {
      setUser(res.data.user);
      setStudent(null);
    }
  };

  const logout = async () => {
    try {
      if (student) {
        await axios.post("http://localhost:5000/api/students/logout", {}, { withCredentials: true });
        setStudent(null);
      }
      if (user) {
        await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
        setUser(null);
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, student, loginWithOtp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
