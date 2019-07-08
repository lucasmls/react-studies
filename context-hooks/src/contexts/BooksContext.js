import React, { useReducer, createContext } from "react";
import { booksReducer } from "../reducers/books";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {
  const [books, dispatch] = useReducer(booksReducer, []);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
}

/* 
  [
    { id: 1, title: "the way of kings", author: "Brandon Sanderson" },
    { id: 2, title: "the name of the wind", author: "Patrick Rothfuss" },
    { id: 3, title: "the final empire", author: "Brandon Sanderson" },
    { id: 4, title: "the fellowship of the ring", author: "J. R. R. Tolkien" }
  ]
*/
