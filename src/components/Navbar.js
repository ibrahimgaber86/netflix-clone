import React, { useEffect } from "react";
import "./navbar.scss";

import logo from "../imgs/Netflix_logo.svg";
import user from "../imgs/user.png";

function handleScroll(e) {
  const nav = document.getElementById("nav");
  if (window.scrollY > 60) {
    nav.style.backgroundImage = "linear-gradient(to top ,#111,rgba(0,0,0.5))";
  } else {
    nav.style.backgroundImage = "none";
  }
}
function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav id="nav">
      <img style={{ height: 30 }} src={logo} alt="logo" />
      <img style={{ height: 50 }} src={user} alt="user" />
    </nav>
  );
}

export default Navbar;
