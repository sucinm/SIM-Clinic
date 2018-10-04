import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Form.css";

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
          <div className="table-responsive">
            <table className="table table-hover dataTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nomor Rekam Medis</th>
                  <th>Nama</th>
                  <th>Jenis Kelamin</th>
                  <th>Umur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>12121211222</td>
                  <td>Budi Anugrah Setiawan</td>
                  <td>Laki-laki</td>
                  <td>24 tahun 5 bulan 6 hari</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <p>1</p>
            </div>
            <div className="col-sm-4">
              <p>2</p>
            </div>
            <div className="col-sm-4">
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
