import React, { useState } from "react";
import axios from "axios";
import Icon from "../images/icon.png"; // Importing the same icon
import bannerImage from "../images/login.jpg"; // Using the same banner image
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { username, email, password });
      alert("Registration successful");
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="Register Icon"
            src={Icon}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
        </div>
        <h2
          style={{
            margin: "0",
            pading: "0",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Sign Up
        </h2>
        <p
          style={{
            margin: "0",
            pading: "0",
          }}
        >
          Enter your details to create your account and get started.
        </p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <span onClick={togglePasswordVisibility} style={styles.icon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.39)",
    width: "300px",
  },
  heading: {
    margin: "0 0 20px 0",
    textAlign: "center",
    color: "#333",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "90%", // Ensure full width
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: "30px",
    cursor: "pointer",
    color: "#888",
  },
  button: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Register;
