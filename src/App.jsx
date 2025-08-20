import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
