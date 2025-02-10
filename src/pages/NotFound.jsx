import React from "react";

export const NotFound = () => {
  return (
    <div style={styles2.container}>
      <h1 style={styles2.header}>404 - Page Not Found</h1>
      <p style={styles2.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" style={styles2.link}>
        Go back to Home
      </a>
    </div>
  );
};

const styles2 = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
  },
  header: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  link: {
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
  },
};
