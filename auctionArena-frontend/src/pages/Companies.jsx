import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to headers
          },
        };

        const response = await axios.get(
          "http://localhost:3000/company/getAllCompanies",
          config
        );
        setCompanies(response.data.companies);
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []); // Run once on component mount

  if (loading) return <div className="text-center">Loading...</div>; // Handle loading state

  const groupedCompanies = companies.reduce((acc, company) => {
    const domain = company.domain.name;
    if (!acc[domain]) {
      acc[domain] = { sold: [], unsold: [] };
    }
    const companyData = {
      Name: company.name,
      Domain: domain,
      Logo: company.logo,
      Rating: company.rating,
      MarketCap: company.marketCapital,
      BasePrice: company.basePrice,
      SolAt: company.soldAt,
      TeamName: company.soldTo ? company.soldTo.name : null,
    };
    if (company.sold) {
      acc[domain].sold.push(companyData);
    } else {
      acc[domain].unsold.push(companyData);
    }
    return acc;
  }, {});

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Companies</h1>
      {Object.keys(groupedCompanies).map((domain) => (
        <div className="card mb-5 border-dark shadow" key={domain}>
          <div className="card-header bg-dark text-white text-center">
            <h2 className="card-title">{domain}</h2>
          </div>
          <div className="card-body">
            {groupedCompanies[domain].sold.length > 0 && (
              <div className="my-4 px-md-5">
                <h3 className="text-center mb-5">Sold Companies</h3>
                <div className="row justify-content-center">
                  {groupedCompanies[domain].sold.map((company) => (
                    <div className="col-12 col-md-6 mb-4" key={company.Name}>
                      <div className="card  border-dark h-100">
                        <div className="card-header bg-success text-white text-center">
                          <h4 className="card-title">{company.Name}</h4>
                        </div>
                        <div className="card-body d-flex ">
                          <div className="d-flex me-3 mx-lg-5 mx-md-2">
                            <img
                              src={company.Logo}
                              alt={`${company.Name} logo`}
                              className="img-fluid rounded justify-content-center align-items-center"
                              style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "120px",
                                maxHeight: "120px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <div className="flex-grow-1 ms-1 ms-lg-5 ms-md-3">
                            <h5>
                              Base Price: {company.BasePrice.toLocaleString()}
                            </h5>
                            <h6 className="card-text">
                              Sold at {company.SolAt.toLocaleString()} to{" "}
                              {company.TeamName}
                            </h6>
                            <p>
                              Rating: {company.Rating} <br />
                              Market Capital:{" "}
                              {company.MarketCap.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {groupedCompanies[domain].unsold.length > 0 && (
              <div className="my-4 px-md-5">
                <h3 className="text-center mb-5">Unsold Companies</h3>
                <div className="row justify-content-center">
                  {groupedCompanies[domain].unsold.map((company) => (
                    <div className="col-12 col-md-6 mb-4" key={company.Name}>
                      <div className="card  border-dark h-100">
                        <div className="card-header bg-primary text-white text-center">
                          <h4 className="card-title">{company.Name}</h4>
                        </div>
                        <div className="card-body d-flex ">
                          <div className="d-flex me-3 mx-lg-5 mx-md-2">
                            <img
                              src={company.Logo}
                              alt={`${company.Name} logo`}
                              className="img-fluid rounded justify-content-center align-items-center"
                              style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "120px",
                                maxHeight: "120px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <div className="flex-grow-1 ms-1 ms-lg-5 ms-md-3">
                            <h5>
                              Base Price: {company.BasePrice.toLocaleString()}
                            </h5>
                            <h6 className="card-text">Unsold</h6>
                            <p>
                              Rating: {company.Rating} <br />
                              Market Capital:{" "}
                              {company.MarketCap.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {groupedCompanies[domain].sold.length === 0 &&
              groupedCompanies[domain].unsold.length === 0 && (
                <div className="text-center my-4">
                  <p>No companies available</p>
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
