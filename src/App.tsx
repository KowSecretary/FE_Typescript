import { Route, Routes } from "react-router-dom";
import "./App.css";

// UN-AUTH
import Login from "./pages/auth/login";
import Home from "./pages/landing/home";
import About from "./pages/landing/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
