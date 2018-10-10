import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import "./assets/CSS/Form.css";
// import Sidebar from "./components/FrontDesk/Sidebar";
import Beranda from "./views/FrontDesk/Dashboard";
import TambahPasien from "./views/FrontDesk/TambahPasien";
import TambahAntrian from "./views/FrontDesk/TambahAntrian";
import PelayananMedis from "./views/PelayananMedis/Dashboard";
import TambahLayanan from "./views/PelayananMedis/TambahLayanan";
import HasilLaboratorium from "./views/PelayananMedis/HasilLaboratorium";
import Apotek from "./views/Apotek/Dashboard";
import RekapObat from "./views/Apotek/RekapObat";
import Kasir from "./views/Kasir/Dashboard";
import RekapPembayaran from "./views/Kasir/RekapPembayaran";
import Admin from "./views/Admin/Dashboard";

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
          <Route path="/hasil-laboratorium" component={HasilLaboratorium} />
          <Route path="/apotek" component={Apotek} />
          <Route path="/resep-obat" component={RekapObat} />
          <Route path="/kasir" component={Kasir} />
          <Route path="/detail-pembayaran" component={RekapPembayaran} />
          <Route path="/admin" component={Admin} />
        </div>
      </div>
    );
  }
}

export default App;
