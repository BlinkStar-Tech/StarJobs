// Import necessary dependencies from React, axios, and react-router-dom
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * JobDetail component: Fetches and displays the details of a single job.
 */
const JobDetail = () => {
  // Get the job ID from the URL parameters
  const { id } = useParams();

  // Initialize state to store the job details
  const [job, setJob] = useState(null);

  /**
   * useEffect hook: Fetches the job details when the component mounts or the job ID changes.
   */
  useEffect(() => {
    // Define an async function to fetch the job details
    const fetchJob = async () => {
      // Make a GET request to the /api/jobs endpoint with the job ID
      const response = await axios.get(`/api/jobs/${id}`);
      // Update the job state with the received data
      setJob(response.data);
    };
    // Call the fetchJob function
    fetchJob();
  }, [id]); // Re-run the effect when the job ID changes

  // Render the job details
  return (
    <div>
      {job ? (
        // Display the job details if they are available
        <>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <button onClick={() => alert("Apply for this job")}>Apply Now</button>
        </>
      ) : (
        // Display a loading message if the job details are not available
        <p>Loading job details...</p>
      )}
    </div>
  );
};

// Export the JobDetail component
export default JobDetail;
