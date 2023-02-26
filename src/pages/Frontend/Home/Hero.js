import React from "react";
import "../../../scss/herosection.scss";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div className="main-div d-flex flex-column justify-content-center align-items-center text-light">
        <motion.h4 whileHover={{ scale: 1.2 }} >One Shop</motion.h4>
        <motion.h2 className="bold" whileHover={{ scale: 1.2 }}>Event Planner</motion.h2 >
        <motion.p whileHover={{ scale: 1.2 }}>
          Every Event Should Be Perfect!
        </motion.p>
        <div className="row">
   
            <Link to="/events"
              className="btn btn-success">Join Events
            </Link>
        
          
            <Link to="/authentication/login"
            className="btn btn-outline-danger my-2">
                Get Started 
              
            </Link>
          
        </div>
      </div>
      ;
    </div>
  );
}
