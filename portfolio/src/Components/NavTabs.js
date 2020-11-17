import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavTabs(props) {
    return (
<div>
    
    <ul className="nav nav-tabs">
       <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
          About
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#PortfolioPg"
          onClick={() => props.handlePageChange("PortfolioPg")}
          className={props.currentPage === "PortfolioPg" ? "nav-link active" : "nav-link"}
          >
          Portfolio
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
          Contact
        </a>
      </li>


    </ul>
</div>


);
}

export default NavTabs;
