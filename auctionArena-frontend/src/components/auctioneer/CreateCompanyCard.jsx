import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCompanyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    basePrice: "",
    domain: "",
    rating: "",
    marketCapital: "",
  });
  const [domains, setDomains] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the domains from the backend when the component mounts
    const fetchDomains = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to headers
          },
        };
        const response = await axios.get(
          "http://20.197.36.224:3000/domain/getAllDomains",
          config
        );
        setDomains(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response.data.message);
      }
    };

    fetchDomains();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to headers
        },
      };
      const response = await axios.post(
        "http://20.197.36.224:3000/company/createCompany",
        formData,
        config
      );
      console.log("New Company:", response.data);
      // Reset the form after successful submission
      setFormData({
        name: "",
        logo: "",
        basePrice: "",
        domain: "",
        rating: "",
        marketCapital: "",
      });
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <div className="col-md-8 p-4 border border-3 rounded shadow">
        <h2 className="text-center mb-4  text-dark text-center p-2">
          Create Company
        </h2>
        <hr />
        <form
          onSubmit={handleSubmit}
          className=" d-flex justify-content-center flex-column"
        >
          <div className="row">
            <div className="col-md-6 ">
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="logo" className="form-label">
                  Logo URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="logo"
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="basePrice" className="form-label">
                  Base Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="basePrice"
                  name="basePrice"
                  value={formData.basePrice}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="domain" className="form-label">
                  Domain
                </label>
                <select
                  className="form-select"
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a domain</option>
                  {domains.map((domain) => (
                    <option key={domain._id} value={domain._id}>
                      {domain.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  min="1"
                  max="5"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="marketCapital" className="form-label">
                  Market Capital
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="marketCapital"
                  name="marketCapital"
                  value={formData.marketCapital}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mt-3 ">
            Create
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Submission</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to submit this company?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCompanyForm;
