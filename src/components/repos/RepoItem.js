import React from "react";
import PropTypes from "prop-types";

export const RepoItem = ({ repo }) => {
  return (
    <div
      className="row justify-content-center mx-auto mt-2"
      style={{ width: "100%" }}
    >
      <div className="col-md-10 mx-auto">
        <div className="card">
          <div className="card-body">
            <a href={repo.html_url}>{repo.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
