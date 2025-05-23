import React from "react";
import bannerImage from "../images/banner.jpg"; // Import the image

const Banner = () => {
  // Function to determine if the screen is small
  const isSmallScreen = () => window.innerWidth <= 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isSmallScreen() ? "50px 20px" : "100px 20px", // Adjust padding for small screens
        color: "white",
        backgroundImage: `url(${bannerImage})`,
        height: isSmallScreen() ? "60vh" : "80vh", // Adjust height for small screens
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        backgroundBlendMode: "multiply", // Blend the background color with the image
      }}
    >
      <h1
        style={{
          fontSize: isSmallScreen() ? "2rem" : "2.5rem",
          marginBottom: "20px",
        }}
      >
        The Easiest Way To Get Your Dream Job
      </h1>
      <p
        style={{
          fontSize: isSmallScreen() ? "1rem" : "1.2rem",
          marginBottom: "30px",
        }}
      >
        Tecnology | Business | Consulting | IT Company | Design | Development
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen() ? "column" : "row", // Stack vertically on small screens
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Job title, Company..."
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: isSmallScreen() ? "100%" : "300px", // Full width on small screens
          }}
        />
        <select
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: isSmallScreen() ? "100%" : "auto", // Full width on small screens
          }}
        >
          <option value="">Select Region</option>
          <option value="region1">Harare</option>
          <option value="region2">Bulawayo</option>
          <option value="region3">Gweru</option>
          <option value="region4">Mutare</option>
          <option value="region5">Masvingo</option>
          <option value="region5">Other</option>
        </select>
        <select
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: isSmallScreen() ? "100%" : "auto", // Full width on small screens
          }}
        >
          <option value="">Select Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="part-time">Internship</option>
        </select>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#4F959D",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: isSmallScreen() ? "100%" : "auto", // Full width on small screens
          }}
        >
          Search Job
        </button>
      </div>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#4F959D",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Banner;
