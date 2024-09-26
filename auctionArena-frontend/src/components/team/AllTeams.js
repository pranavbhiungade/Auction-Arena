// export default AllTeams;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './AllTeams.css';

const AllTeams = () => {
  const [userTeam, setUserTeam] = useState(null);
  const [otherTeams, setOtherTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = process.env.BACKEND_URL;

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Handle case where token is not available
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Adjust this based on your token structure
        console.log(userId);

        // Fetch user team data
        const userTeamResponse = await axios.get(`${BACKEND_URL}3000/teams/team/getTeamData/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUserTeam(userTeamResponse.data.team);
        console.log(userTeamResponse.data.team);


        // Fetch all teams data
        const allTeamsResponse = await axios.get(`${BACKEND_URL}3000/teams/team/getAllTeamsData`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setOtherTeams(allTeamsResponse.data.teams);

        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response.data.message);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mt-0 p-5">
      <h1 className="text-center mb-4">
        User Dashboard{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-microsoft-teams"
          viewBox="0 0 16 16"
        >
          <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z" />
          <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z" />
        </svg>
      </h1>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white text-center">
              Your Team
            </div>
            <div className="card-body bg-white text-dark">
              {userTeam ? (
                <>
                  <h5 className="card-title text-center">{userTeam.name}</h5>
                  <p className="card-text text-center">
                    <strong>Remaining Budget:</strong> $ {userTeam.budget}
                  </p>
                  <h6 className="text-center">Companies Bought:</h6>
                  <ul className="list-group">
                    {userTeam.purchasedCompanies.map((company, index) => (
                      <li
                        key={index}
                        className="list-group-item bg-light text-dark"
                      >
                        <img
                          src={company.logo}
                          style={{ width: "110px", height: "50px" }}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="text-center">No team data available</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-header bg-dark text-white text-center">
              Other Teams
            </div>
            <div className="card-body bg-white text-dark">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Team Name</th>
                    <th>Companies Bought</th>
                    <th>Remaining Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {otherTeams.map((team, index) => (
                    <tr key={index}>
                      <td className="bg-light text-dark">{team.name}</td>
                      <td className="bg-light text-dark">
                        {team.purchasedCompanies
                          .map((company) => company.name)
                          .join(", ")}
                      </td>
                      <td className="bg-light text-dark">$ {team.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
