import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "the way of kings", author: "Brandon Sanderson" },
    { id: 2, title: "the name of the wind", author: "Patrick Rothfuss" },
    { id: 3, title: "the final empire", author: "Brandon Sanderson" },
    { id: 4, title: "the fellowship of the ring", author: "J. R. R. Tolkien" }
  ]);

  const addBook = ({ title, author }) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}
