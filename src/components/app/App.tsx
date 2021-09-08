import React from "react";
import Header from "../header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "../common/style"
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
