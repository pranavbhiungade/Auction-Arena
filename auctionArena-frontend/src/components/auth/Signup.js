import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = process.env.BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}3000/teams/team/register`,
        {
          name: teamName, // Ensure backend expects 'name' instead of 'teamName'
          password,
          confirmPassword, // Make sure backend handles confirmPassword correctly if needed
        }
      );
      console.log(response.data);
      toast.success("Registered successfully"); // Show success toast message
      // Redirect to login page after successful signup
      navigate("/login", { replace: true });
    } catch (error) {
      setError("Error creating account");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white rounded shadow signup-card"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 text-dark">Sign Up</h2>
        <div className="mb-3">
          <label className="form-label text-dark">Team Name</label>
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
          <label className="form-label text-dark">Confirm Password</label>
          <input
            type="password"
            className="form-control bg-light text-dark border-dark"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-dark w-100 signup-button">
          Sign Up
        </button>
        <p className="text-center mt-3 text-dark">
          Already registered? Click on the login button below.
        </p>
        <button
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => navigate("/login", { replace: true })}
        >
          Login
        </button>
      </form>
      <ToastContainer position="top-center" style={{ marginTop: "80px" }} />
    </div>
  );
};

export default Signup;
