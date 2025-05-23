import React from "react";

const Category = () => {
  const jobs = [
    { title: "Marketing", vacancies: "123 Vacancy" },
    { title: "Information Technology", vacancies: "123 Vacancy" },
    { title: "Human Resource", vacancies: "123 Vacancy" },
    { title: "Engineering", vacancies: "123 Vacancy" },
    { title: "Project Management", vacancies: "123 Vacancy" },
    { title: "Business Development", vacancies: "123 Vacancy" },
    { title: "Sales & Communication", vacancies: "123 Vacancy" },
    { title: "Teaching & Education", vacancies: "123 Vacancy" },
    { title: "Design & Creative", vacancies: "123 Vacancy" },
    // { title: "Engineering", vacancies: "123 Vacancy" }, // Added a 9th job for the bottom row
  ];

  // Split jobs into top and bottom rows
  const topJobs = jobs.slice(0, 4); // First 4 jobs for the top row
  const bottomJobs = jobs.slice(4, 8); // Next 5 jobs for the bottom row

  const boxStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    width: "200px",
    margin: "10px",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <h1 style={{ textAlign: "center", fontWeight: "1000", color: "#205781" }}>
        Explore By Category
      </h1>
      <div style={boxStyle}>
        {/* Top row with 4 boxes */}
        {topJobs.map((job, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#4F959D" }}>{job.title}</h3>
            <p>{job.vacancies}</p>
          </div>
        ))}
      </div>
      <div style={boxStyle}>
        {/* Bottom row with 5 boxes */}
        {bottomJobs.map((job, index) => (
          <div
            key={index + 4} // Use a unique key for the bottom row
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#4F959D" }}>{job.title}</h3>
            <p>{job.vacancies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
