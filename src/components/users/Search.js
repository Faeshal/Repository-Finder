import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import Welcome from "../layout/welcome.svg";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert(
        "Input Box Empty, Please Enter Something .....",
        "warning"
      );
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className=" col-md-6 offset-md-3">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-4 mt-2">
          <input
            type="text"
            name="text"
            className="form-control form-control-lg"
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
      </div>
      {githubContext.users.length == 0 && (
       <div className="row ">
         <div style={col}>
           <img src={Welcome} style={{width:"380px"}} />
         </div>
       </div>
      )}
      <div className=" col-md-6 offset-md-3">
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-sm btn-dark mb-3"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
      </div>
    </div>
  );
};

const col  = {
  margin: "0",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};


export default Search;
