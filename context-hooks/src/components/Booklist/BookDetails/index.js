import React, { useContext } from "react";
import { BooksContext } from "../../../contexts/BooksContext";

export default function BookDetails({ book }) {
  const { deleteBook } = useContext(BooksContext);

  return (
    <li className="book" onClick={() => deleteBook(book.id)}>
      <span className="book__title">
        <b>{book.title}</b>
      </span>
      <span className="divider"> - </span>
      <span className="book__author">{book.author}</span>
    </li>
  );
}
