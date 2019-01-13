import React, { Component } from "react";

export const UserContext = React.createContext();

export default class UserProvider extends Component {
  state = {
    id: "1",
    name: "Lucas Mendes",
    email: "lucas@gmail.com"
  };

  logout = () => this.setState({ id: null, name: "", email: "" });

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
