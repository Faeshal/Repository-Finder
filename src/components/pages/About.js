import React from "react";
import Logo from "../layout/react.png";

export default function About() {
  return (
    <div class="row mx-auto">
      <div className="col-md-12 text-center" style={col}>
        <img src={Logo} style={{ width: "200px" }} />
        <h2>
          Created by Faeshal - With <b>React</b>
        </h2>
        <h4>Using Hooks & Context API</h4>
        <h4>Docs: <a href="https://github.com/Faeshal/Repository-Finder">Github</a> </h4>
      </div>
    </div>
  );
}

const col = {
  margin: "0",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
