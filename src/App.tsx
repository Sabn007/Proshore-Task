import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { FavTable, SpellTable } from "./pages";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SpellTable />} />
        <Route path="/fav-table" element={<FavTable />} />
      </Routes>
    </Router>
  );
}

export default App;
