import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionManager = ({ children }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token"); // Get the token from sessionStorage

  useEffect(() => {
    if (token) {
      try {
        // Decode the JWT token to get the expiration time
        const payload = JSON.parse(atob(token.split(".")[1])); // Decodes base64 payload
        const tokenExpiry = payload.exp * 1000; // Convert expiry time to milliseconds
        const remainingTime = tokenExpiry - Date.now();

        if (remainingTime > 0) {
          // Set a timeout to notify and redirect when the token expires
          const timeoutId = setTimeout(() => {
            alert("Your session has expired. Please sign in again.");
            sessionStorage.removeItem("token"); // Clear token from sessionStorage
            navigate("/signin"); // Redirect to sign-in page
          }, remainingTime);

          return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
        } else {
          // Token already expired
          alert("Your session has expired. Please sign in again.");
          sessionStorage.removeItem("token");
          navigate("/signin");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        alert("An error occurred with your session. Please sign in again.");
        sessionStorage.removeItem("token");
        navigate("/signin");
      }
    }
  }, [token, navigate]);

  return <>{children}</>; // Render the wrapped application
};

export default SessionManager;
