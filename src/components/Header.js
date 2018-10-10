import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button> */}
            <a className="navbar-brand">Klinik Yahya</a>
          </div>
          {/* <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#pricing">PRICING</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div> */}
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/beranda">Beranda</Link>
              </li>
              <li>
                <Link to="/pelayanan-medis">Pelayanan Medis</Link>
              </li>
              <li>
                <Link to="/apotek">Apotek</Link>
              </li>
              <li>
                <Link to="/kasir">Kasir</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>Super Admin</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
