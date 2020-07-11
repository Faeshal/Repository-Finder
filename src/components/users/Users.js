import React, { Component } from "react";
import UsertItem from "../users/UserItem";
class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: "3",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };
  render() {
    return (
      <div className="container">
      <div className="row ">
        {this.state.users.map((user) => (
          <UsertItem key={user.id} user={user} />
        ))}
      </div>
      </div>
    );
  }
}

export default Users;
