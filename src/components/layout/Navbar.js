import React, { Component } from "react";
import propTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github mr-2",
  };

  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 ">
          <a className="navbar-brand" href="#">
            <i className={this.props.icon}></i>
            {this.props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
