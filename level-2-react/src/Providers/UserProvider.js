import React, { Component } from "react";

export const UserContext = React.createContext();

export default class UserProvider extends Component {
  state = {
    id: "1",
    name: "Lucas Mendes",
    email: "lucas@gmail.com"
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
