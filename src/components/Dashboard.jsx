import React, { useState } from "react";
import Sidebar from "../dashboard/Sidebar";


const Dashboard = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    company_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });
      if (response.ok) {
        alert("Job posted successfully!");
        setJob({
          title: "",
          description: "",
          location: "",
          salary: "",
          company_name: "",
        }); // Reset form
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    form: {
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    heading: {
      color: "#333",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <h2 style={styles.heading}>Post a Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
          style={{ ...styles.input, height: "100px" }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={job.company_name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Post Job
        </button>
      </form>
    </div>
  );
};

export default Dashboard;