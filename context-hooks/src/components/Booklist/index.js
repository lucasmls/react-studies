import React, { useContext } from "react";

import BookDetails from "./BookDetails";

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
        {books.length ? (
          books.map(book => <BookDetails key={book.id} book={book} />)
        ) : (
          <p>No books to read. Hello free time!</p>
        )}
      </ul>
    </div>
  );
}
