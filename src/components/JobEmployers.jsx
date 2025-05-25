import React, { useState, useEffect } from "react";
import employerLogo from "../images/bs logo.jpg";
import uniquelogo from "../images/unique.jpg";
import kilalogo from "../images/kilalogo.png";
import proverblogo from "../images/Proverb Tech Logo.png";
// import shadows from "@mui/material/styles/shadows";

const JobEmployers = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Employers data
  const employers = [
    { logo: uniquelogo, company: "Unique Saints Design" },
    { logo: employerLogo, company: "BlinkStar Designs" },
    { logo: kilalogo, company: "Kilar Novels" },
    { logo: proverblogo, company: "Proverb Tech" },
  ];

  // Responsive styles based on window width
  const styles = {
    jobEmployers: {
      marginTop: "70px",
      padding: windowWidth < 768 ? "10px" : "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "rgba(246, 248, 213, 0.34)",
    },
    headPara: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#205781",
    },
    employersSect: {
      display: "flex",
      flexWrap: "wrap",
      gap: windowWidth < 768 ? "10px" : "20px",
      justifyContent: "center",
    },
    employerCard: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: windowWidth < 768 ? "10px" : "20px",
      textAlign: "center",
      width: windowWidth < 768 ? "120px" : "150px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    logo: {
      width: windowWidth < 768 ? "40px" : "50px",
      height: windowWidth < 768 ? "40px" : "50px",
      marginBottom: "10px",
    },
    companyName: {
      margin: "0",
      fontSize: windowWidth < 768 ? "14px" : "16px",
      color: "#4F959D",
    },
  };

  return (
    <div style={styles.jobEmployers}>
      <div style={styles.headPara}>
        <h2>Jobs By Top Employers</h2>
        <p>
          Our Partner Companies Work Closely With Our Clients To Deliver
          Exceptional Results.
        </p>
        <div style={styles.employersSect}>
          {/* Map through the employers array and render each employer */}
          {employers.map((employer, index) => (
            <div key={index} style={styles.employerCard}>
              <img
                src={employer.logo}
                alt={`${employer.company} Logo`}
                style={styles.logo}
              />
              <h3 style={styles.companyName}>{employer.company}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobEmployers;
