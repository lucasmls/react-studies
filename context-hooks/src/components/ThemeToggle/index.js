import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
      {context => (
        <button onClick={context.toggleTheme}>Toggle the theme</button>
      )}
    </ThemeContext.Consumer>
  );
}
