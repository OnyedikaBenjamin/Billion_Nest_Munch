import React, { useState, useEffect } from "react";
import "./loading.css"; // Import your CSS file with the styles from the previous example

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent the page loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time to simulate your actual page loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className="preloader pr__dark">
      <span className="loading">
        <span className="txt">Loading</span>
        <span className="progress">
          <span className="bar-loading"></span>
        </span>
      </span>
    </div>
    //   {isLoading ? (
    //     // Show the loading overlay when isLoading is true
    //     <div id="loading-overlay">
    //       <div className="loader"></div>
    //       {/* You can add a loading message here if desired */}
    //     </div>
    //   ) : (
    //     // Show the content when isLoading is false
    //     <div id="content">
    //       {/* Your page content goes here */}
    //     </div>
    //   )}
    // </div>
  );
};

export default Loading;
