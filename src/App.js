import "./App.scss";
import { Routes, Route } from "react-router-dom";
// Component(s)
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  // <<height>> props indicates 100vh height for component in a single page.
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About height={true} />} />
        <Route path="projects" element={<Projects height={true} />} />
        <Route path="contact" element={<Contact height={true} />} />
        <Route path="*" element={<Home height={true} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
