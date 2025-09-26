import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check login on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // User check
        const userRes = await axios.get("http://localhost:5000/api/auth/check", {
          withCredentials: true,
        });
        setUser(userRes.data.user);
      } catch {
        setUser(null);
      }

      try {
        // Student check
        const studentRes = await axios.get("http://localhost:5000/api/students/check-auth", {
          withCredentials: true,
        });
        setStudent(studentRes.data.student);
      } catch {
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // ✅ Unified OTP login function
  const loginWithOtp = async (role, mobile, otp) => {
    if (!mobile || !otp) throw new Error("Mobile & OTP are required");

    const endpoint =
      role === "student"
        ? "http://localhost:5000/api/students/verify-otp"
        : "http://localhost:5000/api/auth/verify-otp";

    const res = await axios.post(
      endpoint,
      { mobile, enteredOtp: otp },
      { withCredentials: true }
    );

    if (role === "student") {
      setStudent(res.data.student);
      setUser(null); // ensure only one role is active
    } else {
      setUser(res.data.user);
      setStudent(null); // ensure only one role is active
    }
  };

  // ✅ Unified logout function (detect which role is logged in)
  const logout = async () => {
    try {
      if (user) {
        await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
        setUser(null);
      }

      if (student) {
        await axios.post("http://localhost:5000/api/students/logout", {}, { withCredentials: true });
        setStudent(null);
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
