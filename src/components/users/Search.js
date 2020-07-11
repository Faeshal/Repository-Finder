import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert(
        "Input Box Empty, Please Enter Something .....",
        "warning"
      );
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-4 mt-2">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Type name here..."
              value={this.state.text}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        {showClear && (
          <button className="btn btn-sm btn-dark" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
