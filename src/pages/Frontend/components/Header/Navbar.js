import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { motion } from "framer-motion";
import saylani from "../../../../images/saylani.png";
import "../../../../scss/navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
export default function Navbar() {
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  //   alert("logged out");
  // };


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
      })
      .catch((error) => {
        console.error(error)
      });
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#1f242b"}}>
        <div className="container">
          <Link to="/" className="navbar-brand">
           <h4>
           One Shop
           </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <motion.li whileTap={{ scale: 1.2 }} className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 1.2 }} className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 1.2 }} className="nav-item">
                <Link to="/events" className="nav-link active">
                  Events
                </Link>
              </motion.li>

              <motion.li whileTap={{ scale: 1.2 }} className="nav-item">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </motion.li>
            </ul>
            <div className="d-flex">
              {!isAuthenticated ? (
                <Link
                  to="/authentication/login"
                  className="btn btn-success text-white"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="btn btn-outline-light btn-sm me-2"
                  >
                    Create Event
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
