import React, { Component } from "react";
import "../../assets/CSS/Timeline.css";
import DetailPasien from "../../components/FrontDesk/DetailPasien";
import ResepObat from "../../components/Apotek/ResepObat";

class RekapObat extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menyelesaikan transaksi obat pasien</strong>, klik
          "Selesai".
        </div>
        <nav className="navbar">Resep Obat</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <DetailPasien />
              <ResepObat />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default RekapObat;
