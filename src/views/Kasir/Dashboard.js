import React, { Component } from "react";
import { Link } from "react-router-dom";
import listdata from "../../fakedata/pelayananMedis.json";
import "../../assets/CSS/Timeline.css";

class Dashboard extends Component {
  cetakList() {
    return listdata.map((el, index) => (
      <div className="tracking-item" key={index}>
        <div className="tracking-icon status-outfordelivery">{el.id}</div>
        <div className="tracking-date">
          {el.tanggal}
          <span>08:58</span>
        </div>
        <div className="tracking-content">
          <span>{el.nama_pasien}</span>
          <span>
            Poliklinik <strong>{el.poliklinik}</strong>
          </span>

          <Link to="/detail-pembayaran">
            <button
              type="button"
              className="btn btn-info btn-sm"
              style={{ marginBottom: "0.5rem" }}
            >
              Layani Pasien
            </button>
          </Link>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>melihat pembayaran pelayanan medis pada pasien</strong>,
          klik nomor antrian pasien.
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div id="tracking">
              <nav className="navbar">Daftar Antrian Pembayaran</nav>
              <div className="tracking-list">{this.cetakList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
