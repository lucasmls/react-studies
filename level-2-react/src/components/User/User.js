import React from "react";
import { UserContext } from "../../Providers/UserProvider";

const User = () => (
  <UserContext.Consumer>
    {context => (
      <div>
        <h3>User: </h3>
        <p>{context.user.id}</p>
        <p>{context.user.name}</p>
        <p>{context.user.email}</p>
      </div>
    )}
  </UserContext.Consumer>
);

export default User;
