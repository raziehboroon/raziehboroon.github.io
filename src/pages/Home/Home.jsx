import "./Home.scss";
// Components
import Banner from "../../components/Banner/Banner";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
