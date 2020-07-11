import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";

export default class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // * Search Request
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // * Clear User Card
  clearUsers = () => this.setState({ users: [], loading: false });

  // * Alert When Empty Search
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}
