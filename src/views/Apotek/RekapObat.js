import React, { Component } from "react";
import "../../assets/CSS/Timeline.css";
import DetailPasien from "../../components/FrontDesk/DetailPasien";
import ResepObat from "../../components/Apotek/ResepObat";

class RekapObat extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>melihat data pasien</strong> atau
          <strong> menambahkan pasien ke dalam antrian</strong>, klik
          <strong> nama pasien pada tabel</strong>.
        </div>
        <nav className="navbar">Resep Obat</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <DetailPasien />
              <ResepObat />
              <label style={{ marginTop: "5px", float: "right" }}>
                <button type="button" className="btn btn-info btn-sm">
                  Simpan
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default RekapObat;
