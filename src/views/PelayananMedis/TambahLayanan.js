import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Form.css";
import provinsi from "../../fakedata/daftarProvinsi";
import obat from "../../fakedata/daftarObat";
import SOAP from "../../components/PelayananMedis/TambahSoap";
import ResepObat from "../../components/PelayananMedis/TambahResepObat";
import Tindakan from "../../components/PelayananMedis/TambahTindakan";
import Laboratorium from "../../components/PelayananMedis/TambahTindakanLaboratorium";

class TambahLayanan extends Component {
  daftarProvinsi() {
    return provinsi.map((el, index) => (
      <option value="Sail" key={index}>
        {el.nama}
      </option>
    ));
  }
  daftarObat() {
    return obat.map((el, index) => (
      <option value="Sail" key={index}>
        {el.nama} --- Rp.
        {el.harga}
      </option>
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menambahkan data pasien baru</strong>, lengkapi form dan
          klik <strong>"Simpan"</strong>.
        </div>

        <nav className="navbar">Pelayanan Medis</nav>
        <div className="form-style">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <br />
          <form>
            <div className="row">
              <SOAP />
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ResepObat />
                <Tindakan />
                <Laboratorium />
              </div>
            </div>

            <label style={{ margin: "10px auto", float: "right" }}>
              <Link to="/tambah-antrian/data-diri">
                <button type="button" className="btn btn-info btn-sm">
                  Simpan
                </button>
              </Link>
            </label>
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default TambahLayanan;
