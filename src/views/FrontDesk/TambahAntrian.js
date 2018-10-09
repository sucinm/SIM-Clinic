import React, { Component } from "react";
import DetailPasien from "../../components/FrontDesk/DetailPasien";

class TambahAntrian extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }
  showHide(value) {
    this.setState({
      showMe: value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk <strong>menambahkan antrian pelayanan medis</strong>, lengkapi
          form dan klik "Tambah Antrian".
        </div>
        <nav className="navbar">Tambah Antrian Pelayanan Medis</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <DetailPasien />
              <div className="col-md-6">
                <fieldset className="item2">
                  <legend>Tambah Antrian Pasien</legend>
                  <label>
                    <span>
                      Jenis Pasien
                      <span className="required">*</span>
                    </span>
                    <br />
                    <select name="jenis_pasien" className="form-control">
                      <option value="1" onClick={() => this.showHide(false)}>
                        Umum
                      </option>
                      <option value="2" onClick={() => this.showHide(true)}>
                        Asuransi / Jaminan
                      </option>
                    </select>
                  </label>

                  <label>
                    <span>
                      Layanan Medis <span className="required">*</span>
                    </span>
                    <select name="layanan_medis" className="form-control">
                      <option value="1">Rawat Jalan</option>
                      <option value="2">Laboratorium</option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Nama Petugas
                      <span className="required">*</span>
                    </span>
                    <select name="nama_petugas" className="form-control">
                      <option value="Putra">Putra</option>
                      <option value="Ery">Ery</option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Nama Dokter
                      <span className="required">*</span>
                    </span>
                    <select name="nama_dokter" className="form-control">
                      <option value="dr. Sri Maryati, SpOG">
                        dr. Sri Maryati, SpOG
                      </option>
                      <option value="Dr. Amru Sofian, SpOG (K) Onk MWALS">
                        Dr. Amru Sofian, SpOG (K) Onk MWALS
                      </option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Poliklinik
                      <span className="required">*</span>
                    </span>
                    <select name="poliklinik" className="form-control">
                      <option value="Umum">Umum</option>
                      <option value="Gigi">Gigi</option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Tanggal <span className="required">*</span>
                    </span>
                    <input
                      type="date"
                      name="tanggal"
                      className="form-control"
                    />
                  </label>
                </fieldset>
                <br />
                {this.state.showMe ? (
                  <fieldset className="item3">
                    <legend>Asuransi / Jaminan</legend>

                    <label>
                      <span>
                        Kelas <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="kelas"
                        className="form-control"
                      />
                    </label>
                    <label>
                      <span>
                        Faskes
                        <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="faskes"
                        className="form-control"
                      />
                    </label>
                    <label>
                      <span>
                        Nomor Kartu <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="no_kartu"
                        className="form-control"
                      />
                    </label>
                    <label>
                      <span>
                        Tanggal Valid
                        <span className="required">*</span>
                      </span>
                      <input
                        type="date"
                        name="tanggal_valid"
                        className="form-control"
                      />
                    </label>
                  </fieldset>
                ) : null}

                <label style={{ marginTop: "5px", float: "right" }}>
                  <button type="button" className="btn btn-info btn-sm">
                    Simpan
                  </button>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TambahAntrian;
