import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./Pages/About";
import PortfolioPg from "./Pages/PortfolioPg";
import Contact from "./Pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "PortfolioPg") {
      return <PortfolioPg />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
         <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
