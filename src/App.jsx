import React from "react";

import "../src/App.css"
import {Route, Routes } from "react-router-dom";
import ToDoApp from "./components/ToDoApp";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/to-do-app" element={<ToDoApp />} />
      </Routes>
    </div>

  );
};

export default App;
