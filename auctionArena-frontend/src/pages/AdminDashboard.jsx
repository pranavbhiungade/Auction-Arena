import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AuctioneerPage from "../components/auctioneer/CompanyCard"; // Replace with your actual component
import AllCompanies from "../pages/Companies"; // Replace with your actual component
import CreateCompany from "../components/auctioneer/CreateCompanyCard"; // Replace with your actual component
import UpdateCompany from "../components/auctioneer/UpdateCompanyForm"; // Replace with your actual component
import CreateDomain from "../components/auctioneer/CreateDomainForm"; // Replace with your actual component

function AdminDashboard() {
  return (
    <div className="container py-5">
   
      <div className="row text-center mb-4">
    
        <div className="col">
          <h1 className="display-4 text-dark">
            Admin Portal{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-kanban"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
            </svg>
          </h1>
          <p className="lead text-muted">
            Manage all aspects of the system from here.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-3 mb-4">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title text-center">Navigate</h5>
            </div>
            <div className="card-body">
              <ul className="nav flex-column">
                <li className="nav-item mb-2 ">
                  <Link
                    to="/auctioneer"
                    className="nav-link text-dark text-center bg-light  rounded p-2"
                  >
                    <i className="bi bi-clipboard-data me-2"></i> Start Auction
                    !
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/companies"
                    className="nav-link text-dark text-center bg-light rounded p-2"
                  >
                    <i className="bi bi-building me-2"></i> All Companies
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/createCompany"
                    className="nav-link text-dark text-center bg-light rounded p-2"
                  >
                    <i className="bi bi-plus-circle me-2"></i> Create Company
                  </Link>
                </li>
                {/* <li className="nav-item mb-2">
                  <Link
                    to="/updateCompany"
                    className="nav-link text-dark text-center bg-light rounded p-2"
                  >
                    <i className="bi bi-pencil-square me-2"></i> Update Company
                  </Link>
                </li> */}
                <li className="nav-item mb-2">
                  <Link
                    to="/createDomain"
                    className="nav-link text-dark text-center bg-light rounded p-2"
                  >
                    <i className="bi bi-cloud-plus me-2"></i> Create Domain
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/auctioneer" element={<AuctioneerPage />} />
          <Route path="/companies" element={<AllCompanies />} />
          <Route path="/createCompany" element={<CreateCompany />} />
          <Route path="/updateCompany" element={<UpdateCompany />} />
          <Route path="/createDomain" element={<CreateDomain />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;




