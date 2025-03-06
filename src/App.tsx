import { Route, Routes } from "react-router-dom";
import "./App.css";

// UN-AUTH
import Login from "./pages/auth/login";
import Home from "./pages/landing/home";
import MainPage from "./pages/landing/mainPage";
import About from "./pages/landing/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
