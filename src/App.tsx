import logo from "./logo.svg";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:pokemon" element={<Details />}/>
      </Routes>
    </Router>
  );
}

export default App;
