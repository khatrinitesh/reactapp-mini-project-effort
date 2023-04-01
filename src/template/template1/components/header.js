import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header_section">
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
            <a
                className="navbar-brand"
                href="https://www.free-css.com/free-css-templates"
            >
                <img src={require('../img/logo.png')} alt="website template image" />{" "}
                <span>Brighton</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="/" activeClassName="selected"
                        className="nav-link"
                    >
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  activeClassName="selected" to="/about" className="nav-link">
                        About
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="selected" to="/program" className="nav-link">
                        Programs
                    </NavLink>
                    </li>
                    <li className="nav-item active">
                    <NavLink activeClassName="selected" to="/contactus" className="nav-link">
                        Contact us
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
        </header>

  )
}
