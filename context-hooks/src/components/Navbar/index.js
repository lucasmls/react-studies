import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.typography }}>
      <h1>Context App</h1>
      <p onClick={toggleAuthentication}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
