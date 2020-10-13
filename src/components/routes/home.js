import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="container catalog">
          <div className="row">
            <div className="col-md-12">
              <div className="event__links">
                <h6 style={{ textAlign: "center" }}>Departments</h6>
                <Link to="/events/departments/cse">CSE</Link>
                <Link to="/events/departments/it">IT</Link>
                <Link to="/events/departments/ece">ECE</Link>
              </div>
            </div>
            
          </div>
        </div>
       
      </div>
    );
  }
}

export default Home;
