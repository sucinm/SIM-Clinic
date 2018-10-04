import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/FrontDesk/Header";
import Beranda from "./views/FrontDesk/Dashboard";
import TambahPasien from "./views/FrontDesk/TambahPasien";
import TambahAntrian from "./views/FrontDesk/TambahAntrian";
import PelayananMedis from "./views/PelayananMedis/Dashboard";
import TambahLayanan from "./views/PelayananMedis/TambahLayanan";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ marginTop: "30px" }}>
          <Route path="/beranda" component={Beranda} />
          <Route path="/tambah-pasien" component={TambahPasien} />
          <Route path="/tambah-antrian" component={TambahAntrian} />
          <Route path="/pelayanan-medis" component={PelayananMedis} />
          <Route path="/tambah-layanan" component={TambahLayanan} />
        </div>
      </div>
    );
  }
}

export default App;
