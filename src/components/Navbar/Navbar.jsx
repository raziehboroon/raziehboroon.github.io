import "./Navbar.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { goToTop } from "../../utils/helpers";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const nav = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowDropDown(false);
      if (window.pageYOffset > 80) {
        nav.current.className = "nav-fixed";
      } else {
        nav.current.className = "";
      }
    });
  }, []);

  return (
    <nav ref={nav}>
      <div className="nav-center">
        <div
          className="nav-logo"
          onClick={() => {
            setShowDropDown(false);
            goToTop();
          }}
        >
          <Link to="/">
            <img
              src={"/assets/images/apple-touch-icon.png"}
              alt="logo"
            />
          </Link>
        </div>
        <ul
          className={`${showDropDown && "navToggle"}`}
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div
          className={`navBtn ${showDropDown && "navToggle"}`}
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div className="navBtn-burger"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
