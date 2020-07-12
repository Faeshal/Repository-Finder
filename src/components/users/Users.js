import React, { useContext } from "react";
import UsertItem from "../users/UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <div className="row ">
          {users.map((user) => (
            <UsertItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
