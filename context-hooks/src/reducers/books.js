import uuid from "uuid/v1";

export const booksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { ...action.payload, id: uuid() }];

    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.payload.id);

    default:
      return state;
  }
};
