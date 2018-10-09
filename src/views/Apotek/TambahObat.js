import React, { Component } from "react";
import "../../assets/CSS/Form.css";
import TambahObat from "../../components/Apotek/TambahObat";
import DaftarObat from "../../components/Apotek/DaftarObat";

class TambahObat extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menambahkan data obat</strong>, lengkapi form dan klik
          <strong> "Simpan"</strong>.
        </div>
        <nav className="navbar">Daftar Obat</nav>
        <div className="form-style">
          <div className="row">
            <TambahObat />
            <DaftarObat />
          </div>
        </div>
      </div>
    );
  }
}
export default TambahObat;
