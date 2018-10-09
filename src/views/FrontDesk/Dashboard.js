import React, { Component } from "react";
import { Link } from "react-router-dom";
import DaftarPasien from "../../components/FrontDesk/DaftarPasien";
class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>melihat data pasien</strong> atau
          <strong> menambahkan pasien ke dalam antrian</strong>, klik nama
          pasien pada tabel.
        </div>
        <nav className="navbar">Daftar Pasien</nav>
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
