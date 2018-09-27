import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Header from "./components/JSX/FrontDesk/Header";
import Beranda from "./components/JSX/FrontDesk/Dashboard";
import Laporan from "./components/JSX/FrontDesk/Laporan";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          <li>
            <Link to="/beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/laporan">Laporan</Link>
          </li>
        </ul>
        <div>
          <Route path="/beranda" component={Beranda} />
          <Route path="/laporan" component={Laporan} />
        </div>
      </div>
    );
  }
}

export default App;
