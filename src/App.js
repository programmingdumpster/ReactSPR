import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Upewnij się, że ten plik zawiera nowe style
import Home from "./components/Home";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="container">
        <Analytics />
        <h1 className="my-4">React</h1>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task1">
                Przełącznik Światła
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task2">
                Lista Zadań
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task3">
                Koszyk Zakupowy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task4">
                Zegar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task5">
                Licznik
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
