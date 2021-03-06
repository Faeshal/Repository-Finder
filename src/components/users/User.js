import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div
        className="row justify-content-center text-center mx-auto"
        style={{ width: "100%" }}
      >
        <div className="col-md-10">
          <Link to="/" className="btn btn-dark btn-sm">
            Back
          </Link>
          <div className="card text-center mt-3">
            <h6 className="card-header text-muted">
              Hireable
              {hireable ? (
                <i className="ml-1 fas fa-check text-success" />
              ) : (
                <i className="ml-1 fas fa-times-circle text-danger" />
              )}
            </h6>
            <div className="card-body">
              <img
                src={avatar_url}
                style={{ width: "150px" }}
                className="rounded mx-auto"
              />
              <h4 className="card-title mt-2">{login}</h4>
              <small className="text-muted"> {location} </small>
              {bio && (
                <Fragment>
                  <p className="card-text">{bio}</p>
                </Fragment>
              )}
              {blog && (
                <a href={blog} className="btn btn-sm btn-dark mr-3">
                  Website
                </a>
              )}
              <a href={html_url} className="btn btn-sm btn-dark">
                Visit Profile
              </a>
            </div>
            <div className="card-footer text-center">
              <span className="badge badge-secondary ">
                Followers {followers}
              </span>
              <span className="badge badge-secondary mr-4 ml-4">
                Following {following}
              </span>
              <span className="badge badge-secondary mr-4 ml-4">
                Repository {public_repos}
              </span>
              <span className="badge badge-secondary">Gist {public_gists}</span>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
