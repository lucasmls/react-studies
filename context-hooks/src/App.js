import React from "react";

/**
 * Components
 */
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import Booklist from "./components/Booklist";
import ThemeToggle from "./components/ThemeToggle";

/**
 * Context's providers
 */
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <BooksContextProvider>
            <Navbar />
            <Booklist />
            <BookForm />
            <ThemeToggle />
          </BooksContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
