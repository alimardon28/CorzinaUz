import React from "react";
import '../Header/Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';



const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-box">
             <img src={logo} alt="logo" className="logo"/>
        </div>

            <div className="navCard">
                <span className="span">0</span>
                <Link className="headerLink" to="/card">
                   <i class="bi bi-cart"></i>
                </Link>
            </div>

      </header>
    </>
  );
};

export default Header;
