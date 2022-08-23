import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SpellTable from "./pages/spellTable";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SpellTable />} />
      </Routes>
    </Router>
  );
}

export default App;
