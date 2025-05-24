import React, { useState } from "react";

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

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={job.company_name}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default Dashboard;
