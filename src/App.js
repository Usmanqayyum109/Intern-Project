import React from "react";
import RapidApi from "./Components/API/RapidApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./Components/CRUD/Create";
import Update from "./Components/CRUD/Update";
import Read from "./Components/CRUD/Read";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RapidApi />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
