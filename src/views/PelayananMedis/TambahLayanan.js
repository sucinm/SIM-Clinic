import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Form.css";
import SOAP from "../../components/PelayananMedis/TambahSoap";
import ResepObat from "../../components/PelayananMedis/TambahResepObat";
import Tindakan from "../../components/PelayananMedis/TambahTindakan";
import Laboratorium from "../../components/PelayananMedis/TambahTindakanLaboratorium";

class TambahLayanan extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menambahkan data pasien baru</strong>, lengkapi form dan
          klik <strong>"Simpan"</strong>.
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
            </div>
            <br />
            {/* <div className="row">
              <Tindakan />
              <Laboratorium />
            </div> */}

            <label style={{ margin: "10px auto", float: "right" }}>
              <Link to="/tambah-antrian/data-diri">
                <button type="button" className="btn btn-info btn-sm">
                  Simpan
                </button>
              </Link>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default TambahLayanan;
