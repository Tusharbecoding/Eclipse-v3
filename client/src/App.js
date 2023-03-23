import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import AuthModal from "./components/AuthModal/AuthModal";
import Header from "./components/Header/Header";
import Sponsors from "./pages/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />

        <Route
          path="/"
          element={
            <div>
              {/* <Header />
              <Home /> */}
              <Sponsors />
            </div>
          }
        />
        <Route path="/login" element={<AuthModal />} />
      </Routes>
    </>
  );
}

export default App;
