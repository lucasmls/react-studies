import React, { useContext } from "react";
import { BooksContext } from "../../../contexts/BooksContext";

export default function BookDetails({ book }) {
  const { dispatch } = useContext(BooksContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_BOOK",
      payload: {
        id: book.id
      }
    });
  };

  return (
    <li className="book" onClick={handleDelete}>
      <span className="book__title">
        <b>{book.title}</b>
      </span>
      <span className="divider"> - </span>
      <span className="book__author">{book.author}</span>
    </li>
  );
}
