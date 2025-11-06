// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [trainer, setTrainer] = useState(null);
  const [admin, setAdmin] = useState(null); // ✅ Admin state
  const [loading, setLoading] = useState(true);

  // ✅ Use your deployed backend URL
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  // ✅ Check login on refresh
  useEffect(() => {
    const checkAuth = async () => {
      // Student auth
      try {
        const studentRes = await axios.get(`${BASE_URL}/api/students/check-auth`, {
          withCredentials: true,
        });
        setStudent(studentRes.data.student || null);
      } catch {
        setStudent(null);
      }

      // Trainer auth
      try {
        const trainerRes = await axios.get(`${BASE_URL}/api/trainers/check-auth`, {
          withCredentials: true,
        });
        setTrainer(trainerRes.data.trainer || null);
      } catch {
        setTrainer(null);
      }

      // Admin auth
      try {
        const token = localStorage.getItem("adminToken");
        if (token) {
          const res = await axios.get(`${BASE_URL}/api/admin/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setAdmin(res.data.admin || null);
        } else {
          setAdmin(null);
        }
      } catch {
        setAdmin(null);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  // ✅ Student/User OTP login
  const loginWithOtp = async (role, mobile, otp) => {
    const endpoint =
      role === "student"
        ? `${BASE_URL}/api/students/verify-otp`
        : `${BASE_URL}/api/students/verify-otp`;

    const res = await axios.post(endpoint, { mobile, enteredOtp: otp }, { withCredentials: true });

    if (role === "student") {
      setStudent(res.data.student);
      setUser(null);
    } else {
      setUser(res.data.user);
      setStudent(null);
    }
  };

  // ✅ Trainer OTP login
  const loginTrainerWithOtp = async (phoneNumber, enteredOtp) => {
    const res = await axios.post(
      `${BASE_URL}/api/trainers/verify-otp`,
      { phoneNumber, enteredOtp },
      { withCredentials: true }
    );
    setTrainer(res.data.trainer);
    setUser(null);
    setStudent(null);
    setAdmin(null); // clear admin
    return res.data.trainer;
  };

  // ✅ Admin login
  const loginAdmin = async (username, password) => {
    const res = await axios.post(`${BASE_URL}/api/admin/login`, { username, password });

    if (res.data.success) {
      const token = res.data.token;
      localStorage.setItem("adminToken", token); // Save admin JWT
      setAdmin(res.data.admin);

      // Clear other roles
      setUser(null);
      setStudent(null);
      setTrainer(null);
      return res.data.admin;
    } else {
      throw new Error(res.data.message || "Login failed");
    }
  };

  // ✅ Logout functions
  const logoutUser = async () => {
    try {
      await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error("User logout failed:", err);
    }
  };

  const logoutStudent = async () => {
    try {
      await axios.post(`${BASE_URL}/api/students/logout`, {}, { withCredentials: true });
      setStudent(null);
    } catch (err) {
      console.error("Student logout failed:", err);
    }
  };

  const logoutTrainer = async () => {
    try {
      await axios.post(`${BASE_URL}/api/trainers/logout`, {}, { withCredentials: true });
      setTrainer(null);
    } catch (err) {
      console.error("Trainer logout failed:", err);
    }
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        student,
        trainer,
        admin,
        loginWithOtp,
        loginTrainerWithOtp,
        loginAdmin,
        logoutUser,
        logoutStudent,
        logoutTrainer,
        logoutAdmin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
