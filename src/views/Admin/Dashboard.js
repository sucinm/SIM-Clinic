import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import TambahPengguna from "../../components/Admin/TambahPengguna";
import TambahPoliklinik from "../../components/Admin/TambahPoliklinik";
import TambahKaryawan from "../../components/Admin/TambahKaryawan";
import TambahObat from "../../components/Admin/TambahObat";
class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <nav className="navbar"> Menu Admin</nav>
          <div className="form-style">
            <ul>
              <li>
                <Link to="/admin/tambah-pengguna">
                  <i className="fa fa-plus" />
                  Tambah Pengguna
                </Link>
              </li>
              <li>
                <Link to="/admin/tambah-poliklinik">
                  <i className="fa fa-plus" />
                  Tambah Poliklinik
                </Link>
              </li>
              <li>
                <Link to="/admin/tambah-karyawan">
                  <i className="fa fa-plus" />
                  Tambah Karyawan
                </Link>
              </li>
              <li>
                <Link to="/admin/tambah-obat">
                  <i className="fa fa-plus" />
                  Tambah Obat
                </Link>
              </li>
            </ul>
            <Route path="/admin/tambah-pengguna" component={TambahPengguna} />
            <Route
              path="/admin/tambah-poliklinik"
              component={TambahPoliklinik}
            />
            <Route path="/admin/tambah-karyawan" component={TambahKaryawan} />
            <Route path="/admin/tambah-obat" component={TambahObat} />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Dashboard;
