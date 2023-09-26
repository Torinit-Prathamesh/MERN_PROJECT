import Header from "@shared-layouts/Header";
import Footer from "@shared-layouts/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route extact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
