import React, { Component } from "react";
import SOAP from "../../components/PelayananMedis/TambahSoap";
import ResepObat from "../../components/PelayananMedis/TambahResepObat";
import Tindakan from "../../components/PelayananMedis/TambahTindakan";
import Laboratorium from "../../components/PelayananMedis/TambahTindakanLaboratorium";

class TambahLayanan extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk
          <strong> menambahkan catatan medis pasien</strong>, lengkapi form dan
          klik "Simpan".
        </div>

        <nav className="navbar">Pelayanan Medis</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <SOAP />
              <div className="col-md-6">
                <ResepObat />
                <Tindakan />
                <Laboratorium />
              </div>
              <label style={{ margin: "10px auto" }}>
                <button type="button" className="btn btn-info btn-sm">
                  Simpan
                </button>
              </label>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default TambahLayanan;
