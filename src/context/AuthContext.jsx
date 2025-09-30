// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [trainer, setTrainer] = useState(null); // ✅ trainer
  const [loading, setLoading] = useState(true);

  // ✅ Check login on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const studentRes = await axios.get("http://localhost:5000/api/students/check-auth", {
          withCredentials: true,
        });
        setStudent(studentRes.data.student || null);
      } catch {
        setStudent(null);
      }

      // try {
      //   const userRes = await axios.get("http://localhost:5000/api/auth/check", {
      //     withCredentials: true,
      //   });
      //   setUser(userRes.data.user || null);
      // } catch {
      //   setUser(null);
      // }

      try {
        const trainerRes = await axios.get("http://localhost:5000/api/trainers/check-auth", {
          withCredentials: true,
        });
        setTrainer(trainerRes.data.trainer || null);
      } catch {
        setTrainer(null);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  // ✅ Student/User OTP login
  const loginWithOtp = async (role, mobile, otp) => {
    const endpoint =
      role === "student"
        ? "http://localhost:5000/api/students/verify-otp"
        : "http://localhost:5000/api/students/verify-otp";

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
      "http://localhost:5000/api/trainers/verify-otp",
      { phoneNumber, enteredOtp },
      { withCredentials: true }
    );
    setTrainer(res.data.trainer);
    setUser(null);
    setStudent(null);
    return res.data.trainer;
  };

  // ✅ Logout functions
  const logoutUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error("User logout failed:", err);
    }
  };

  const logoutStudent = async () => {
    try {
      await axios.post("http://localhost:5000/api/students/logout", {}, { withCredentials: true });
      setStudent(null);
    } catch (err) {
      console.error("Student logout failed:", err);
    }
  };

  const logoutTrainer = async () => {
    try {
      await axios.post("http://localhost:5000/api/trainers/logout", {}, { withCredentials: true });
      setTrainer(null);
    } catch (err) {
      console.error("Trainer logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        student,
        trainer,
        loginWithOtp,
        loginTrainerWithOtp,
        logoutUser,
        logoutStudent,
        logoutTrainer,
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
