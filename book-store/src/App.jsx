import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BooksDisplay from "./screens/BooksDisplay";
import BookSearch from "./screens/BookSearch";
import BookCreate from "./screens/BookCreate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<BooksDisplay />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/create" element={<BookCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
