import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <figure>
            <img src="./assets/images/logoJordan.svg" alt="logoJordan" />
          </figure>
          <ul>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Join Us</span>
            </li>
            <li>
              <span>Sign In</span>
            </li>
          </ul>
        </div>
        <div className="header__main">
          <figure>
            <svg
              className="pre-logo-svg"
              height="80px"
              width="80px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </figure>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">Men</Link>
              </li>
              <li>
                <Link to="/">Women</Link>
              </li>
              <li>
                <Link to="/">Kids</Link>
              </li>
              <li>
                <Link to="/">Customise</Link>
              </li>
              <li>
                <Link to="/">Sale</Link>
              </li>
              <li>
                <Link to="/">SNKRS</Link>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <div className="header__search">
              <i className="bx bx-search header__searchIcon"></i>
              <input type="text" placeholder="Search" />
            </div>
            <Link to="/favorite" className="header__heart">
              <i className="bx bx-heart"></i>
            </Link>
            <Link to="/cart" className="header__cart">
              <i className="bx bx-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
