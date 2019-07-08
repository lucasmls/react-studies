import React, { useContext } from "react";
import { formToJSON } from "../../utils/formToJSON";
import { BooksContext } from "../../contexts/BooksContext";

export default function BookForm() {
  const { addBook } = useContext(BooksContext);

  const handleSubmit = e => {
    e.preventDefault();
    addBook(formToJSON(e.target.elements));

    // @TODO => Clean up the inputs after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Book name" required />
      <input name="author" type="text" placeholder="Book author" required />

      <button type="submit">add book</button>
    </form>
  );
}
