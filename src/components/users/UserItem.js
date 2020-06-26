import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={avatar_url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <a href={html_url} className="btn btn-dakr btn-sm mt-2">
              More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
