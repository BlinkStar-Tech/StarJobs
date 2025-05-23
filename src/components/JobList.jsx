import React from "react";
import Button from "@mui/material/Button";
import jobImage from "../images/we-are-hiring-concept-collage.jpg";

const JobList = () => {
  // Example job data
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      region: "Remote",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovate Inc",
      region: "Bulawayo",
      type: "Full Time",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Data Works",
      region: "Harare",
      type: "Part Time",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.jobSection}>
        <h2 style={styles.heading}>RECENT JOBS</h2>
        <div style={styles.jobList}>
          {jobs.map((job) => (
            <div key={job.id} style={styles.jobItem}>
              <h3 style={styles.jobTitle}>{job.title}</h3>
              <p>{job.company}</p>
              <p>
                {job.region} - {job.type}
              </p>
            </div>
          ))}
          <div>
            <Button variant="contained" style={styles.button}>
              Get More Jobs
            </Button>
          </div>
        </div>
      </div>
      <div style={styles.imageSection}>
        <img src={jobImage} alt="Job Illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "70px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping for smaller screens
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "20px",
    boxSizing: "border-box",
  },
  jobSection: {
    flex: 1,
    minWidth: "300px",
    marginRight: "30px",
  },
  heading: {
    textAlign: "left",
    color: "#205781",
    fontSize: "24px",
    marginBottom: "20px",
  },
  jobList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Adds spacing between job items
  },
  jobItem: {
    border: "1px solid #ddd",
    backgroundColor: "rgba(246, 248, 213, 0.42)",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "left",
    width: "100%", // Full width for responsiveness
    boxSizing: "border-box",
  },
  jobTitle: {
    color: "#4F959D",
    margin: "0 0 10px 0",
  },
  button: {
    padding: "10px",
    backgroundColor: "#205781",
    marginTop: "20px",
    width: "50%", // Full width for responsiveness
  },
  imageSection: {
    flex: 1,
    minWidth: "300px",
    textAlign: "center",
  },
  image: {
    maxWidth: "70%",
    height: "auto",
    borderRadius: "10px",
    marginTop: "30px",
  },
  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    jobSection: {
      marginRight: "0",
      marginBottom: "30px",
    },
    image: {
      marginTop: "0",
    },
  },
  "@media (max-width: 480px)": {
    heading: {
      fontSize: "20px",
    },
    jobItem: {
      padding: "15px",
    },
    button: {
      padding: "8px",
    },
  },
};

export default JobList;
