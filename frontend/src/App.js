import "./App.css";
import Home from "./screens/Home";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ContextReducer from "./components/ContextReducer";

function App() {
  return (
    <ContextReducer>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ContextReducer>
  );
}

export default App;
