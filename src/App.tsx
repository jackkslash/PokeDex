import logo from "./logo.svg";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:pokemon" element={<Details />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
