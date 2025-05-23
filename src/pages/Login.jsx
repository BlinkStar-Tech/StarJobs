import React, { useState } from "react";
import axios from "axios";
import Icon from "../images/icon.png";
import bannerImage from "../images/login.jpg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Login error", error);
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
            alt="Login Icon"
            src={Icon}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
        </div>
        <h2 style={styles.heading}>
          Welcome Back Friend... <br /> Sign in
        </h2>

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
        <Link to="/register" style={styles.link}>
          Forgot Password?
        </Link>
        <Link to="/" style={styles.button}>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </Link>

        <Link to="/register" style={styles.link}>
          Don't have an account? Register Now
        </Link>
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
    border: "1px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.39)",
    width: "300px",
  },
  heading: {
    margin: "0 0 20px 0",
    textAlign: "center",
    color: "rgb(252, 255, 199)",
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
    color: "#4F959D",
  },
  button: {
    padding: "5px",
    borderRadius: "4px",
    border: "none",
    textAlign: "center",
    backgroundColor: "#4F959D",
    color: "#F6F8D5",
    fontWeight: "700",
    fontSize: "20px",
    cursor: "pointer",
  },
  link: {
    color: "#205781",
    textDecoration: "none",
  },
};

export default Login;
