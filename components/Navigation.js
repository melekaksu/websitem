import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; 
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/projects">Projeler</Link></li>
        <li><Link to="/contact">İletişim</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
