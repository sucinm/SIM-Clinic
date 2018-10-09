import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Form.css";
import DaftarPasien from "../../components/FrontDesk/DaftarPasien";
class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>melihat data pasien</strong> atau
          <strong> menambahkan pasien ke dalam antrian</strong>, klik
          <strong> nama pasien pada tabel</strong>.
        </div>
        <nav className="navbar">Tambah Antrian Pelayanan Medis</nav>
        <div className="form-style">
          <label>
            <Link to="/tambah-pasien">
              <i className="fa fa-plus" />
              Tambah Pasien
            </Link>
          </label>
          <DaftarPasien />
          <br />
        </div>
      </div>
    );
  }
}

export default Dashboard;
