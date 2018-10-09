import React, { Component } from "react";
import "../../assets/CSS/Timeline.css";
import DetailPembayaran from "../../components/Kasir/DetailPembayaran";

class RekapPembayaran extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong> menyelesaikan pembayaran pelayanan medis</strong>{" "}
          pasien, klik "Selesai".
        </div>
        <nav className="navbar">Rekapitulasi Pembayaran</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <DetailPembayaran />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default RekapPembayaran;
