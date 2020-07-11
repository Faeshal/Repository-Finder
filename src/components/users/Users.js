import React, { Component } from "react";
import UsertItem from "../users/UserItem";

class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          {this.props.users.map((user) => (
            <UsertItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
