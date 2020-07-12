import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // bisa juga props ditaruh dibawah dengan gaya seperti ini , bisa juga ditaruh jadi parameter
  // nanti parameter yang diatas hanya props saja
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="col-md-3">
      <div className="card mx-auto text-center mb-3" style={{ width: "17rem" }}>
        <img className="card-img-top" src={avatar_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm mt-2">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};
export default UserItem;
