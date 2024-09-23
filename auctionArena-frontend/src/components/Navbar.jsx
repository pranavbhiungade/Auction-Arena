import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userRole, handleLogout, setIsLoggedIn }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Auction Arena
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/rules">
                Rulebook
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prizes">
                Prizes
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {userRole === 'admin' && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      Admin Dashboard
                    </NavLink>
                  </li>
                )}
                {userRole === 'team' && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                      User Dashboard
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/companies">
                    All Companies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
