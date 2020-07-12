import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, showClear, setAlert, searchUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Input Box Empty, Please Enter Something .....", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-4 mt-2">
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="Type name here..."
            value={text}
            onChange={onChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      {showClear && (
        <button className="btn btn-sm btn-dark mb-3" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
