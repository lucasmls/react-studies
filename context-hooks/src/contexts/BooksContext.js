import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "the way of kings" },
    { id: 2, title: "the name of the wind" },
    { id: 3, title: "the final empire" },
    { id: 4, title: "the fellowship of the ring" }
  ]);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
}
