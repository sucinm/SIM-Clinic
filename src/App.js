import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/FrontDesk/Header";
// import Sidebar from "./components/FrontDesk/Sidebar";
import Beranda from "./views/FrontDesk/Dashboard";
import TambahPasien from "./views/FrontDesk/TambahPasien";
import TambahAntrian from "./views/FrontDesk/TambahAntrian";
import PelayananMedis from "./views/PelayananMedis/Dashboard";
import TambahLayanan from "./views/PelayananMedis/TambahLayanan";
import Apotek from "./views/Apotek/Dashboard";
// import Kasir from "./views/Kasir/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Sidebar /> */}
        <div style={{ margin: "30px" }}>
          <Route path="/beranda" component={Beranda} />
          <Route path="/tambah-pasien" component={TambahPasien} />
          <Route path="/tambah-antrian" component={TambahAntrian} />
          <Route path="/pelayanan-medis" component={PelayananMedis} />
          <Route path="/tambah-layanan" component={TambahLayanan} />
          <Route path="/apotek" component={Apotek} />

          {/* <Route path="/kasir" component={Kasir} /> */}
        </div>
      </div>
    );
  }
}

export default App;
