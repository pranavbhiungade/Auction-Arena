import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn, setUserRole }) => {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("team"); // Default to team
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/teams/team/login",
        {
          name: teamName,
          password,
          role: accountType, // Ensure backend expects 'role' instead of 'accountType'
        }
      );
      localStorage.setItem("token", response.data.token); // Store token in localStorage
      setIsLoggedIn(true); // Update parent component state
      setUserRole(accountType); // Set the user role
      toast.success("Logged in successfully"); // Show success toast message
      console.log("Toast should be shown now"); // Debugging line
      navigate("/", { replace: true });
    } catch (error) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white rounded shadow login-card"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 text-dark">Login</h2>
        <div className="mb-3">
          <label className="form-label text-dark">
            Team Name / Auctioneer Name
          </label>
          <input
            type="text"
            className="form-control bg-light text-dark border-dark"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-dark">Password</label>
          <input
            type="password"
            className="form-control bg-light text-dark border-dark"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-dark">Account Type</label>
          <select
            className="form-select bg-light text-dark border-dark"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="team">Team</option>
            <option value="admin">Auctioneer</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-dark w-100 login-button">
          Login
        </button>
        <p className="text-center mt-3 text-dark">
          Not registered? Click on the signup button below.
        </p>
        <button
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => navigate("/signup", { replace: true })}
        >
          Signup
        </button>
      </form>
      <ToastContainer
        position="top-center"
        style={{ marginTop: "80px" }} // Adjust the margin as needed
      />
    </div>
  );
};

export default Login;
