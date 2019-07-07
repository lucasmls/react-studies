import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BooksContext } from "../../contexts/BooksContext";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);

  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.background, color: theme.typography }}
    >
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
