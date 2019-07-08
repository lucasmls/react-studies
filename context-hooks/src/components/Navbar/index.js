import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BooksContext } from "../../contexts/BooksContext";

export default function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.typography }}>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through... </p>
    </nav>
  );
}
