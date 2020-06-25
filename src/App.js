import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <header className="App-header">Selamat Datang</header>
      </div>
    );
  }
}
