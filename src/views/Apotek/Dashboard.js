import React, { Component } from "react";
import "../../assets/CSS/Form.css";
import TambahObat from "../../components/Apotek/TambahObat";
import DaftarObat from "../../components/Apotek/DaftarObat";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menambahkan data obat</strong>, lengkapi form dan klik
          <strong> "Simpan"</strong>.
        </div>
        <nav className="navbar">Daftar Obat</nav>
        <div className="form-style">
          <TambahObat />
          <DaftarObat />
        </div>
      </div>
    );
  }
}
export default Dashboard;
