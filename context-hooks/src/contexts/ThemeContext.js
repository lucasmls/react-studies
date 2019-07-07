import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLighTheme: true,
    light: { typography: "#555", ui: "#ddd", background: "#eee" },
    dark: { typography: "#ddd", ui: "#333", background: "#555" }
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
