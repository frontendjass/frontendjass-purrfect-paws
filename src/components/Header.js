import React from "react";


export default function Header() {

  return (
    <header id="header">

      <nav className="navbar">
        <span className="logo">Purrfect Paws 🐾</span>
        <ul className="nav-menu">
          <li><a href="#services">Packages</a></li>
          <li><a className="call-us" href="call-us">Call Us!</a></li>
        </ul>
      </nav>
    </header>
  );
}
