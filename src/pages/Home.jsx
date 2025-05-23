import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import JobList from "../components/JobList";
import Category from "../components/Category";
import Footer from "../components/Footer";
import JobEmployers from "../components/JobEmployers";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Category />
      <JobEmployers />
      <div style={styles.container}>
        {/* <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Job title, Company..."
            style={styles.input}
          />
          <select style={styles.select}>
            <option value="">Select Region</option>
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
          </select>
          <select style={styles.select}>
            <option value="">Select Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
          <button style={styles.button}>Search Job</button>
        </div> */}
        <JobList />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "300px",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Home;
