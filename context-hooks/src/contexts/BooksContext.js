import React, { useReducer, useEffect, createContext } from "react";
import { booksReducer } from "../reducers/books";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {
  const [books, dispatch] = useReducer(
    booksReducer,
    [],
    () => JSON.parse(localStorage.getItem("@books")) || []
  );

  useEffect(() => {
    localStorage.setItem("@books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
}
