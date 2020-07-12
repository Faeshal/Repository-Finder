import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
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
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <div className="row justify-content-center">
          <div className="col-md-10 mx-auto">
            <Link to="/" className="btn btn-dark btn-sm">
              Back
            </Link>
            <div className="card text-center mt-3">
              <h6 class="card-header text-muted">
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
                <span class="badge badge-secondary ">
                  Followers {followers}
                </span>
                <span class="badge badge-secondary mr-4 ml-4">
                  Following {following}
                </span>
                <span class="badge badge-secondary mr-4 ml-4">
                  Repository {public_repos}
                </span>
                <span class="badge badge-secondary">Gist {public_gists}</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
