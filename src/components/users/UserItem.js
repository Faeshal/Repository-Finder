import React from "react";
import propTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // bisa juga props ditaruh dibawah dengan gaya seperti ini , bisa juga ditaruh jadi parameter
  // nanti parameter yang diatas hanya props saja
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="col-md-4">
      <div className="card mx-auto text-center" style={{ width: "15rem" }}>
        <img className="card-img-top" src={avatar_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a href={html_url} className="btn btn-dark btn-sm mt-2">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};
export default UserItem;
