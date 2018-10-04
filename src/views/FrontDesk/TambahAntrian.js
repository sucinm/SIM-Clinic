import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../../assets/CSS/Form.css";
import DataDiri from "../../components/FrontDesk/DataDiri";
import CatatanMedis from "../../components/FrontDesk/CatatanMedis";

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
          form dan klik <strong>"Tambah Antrian"</strong>.
        </div>
        <nav className="navbar">Tambah Antrian Pelayanan Medis</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <fieldset className="item1">
                  <legend>Data Pasien</legend>

                  <div className="row">
                    <div className="col-sm-12">
                      {/* <table>
                        <tr>
                          <td>Nomor MR</td>
                          <td>: 1212112121</td>
                          <td rowSpan="3">
                            <img
                              src={Gender}
                              alt="Icon Patient"
                              style={{ width: "5em", margin: "0 auto" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Nama</td>
                          <td>: Budi Setiawan Nugroho</td>
                        </tr>
                        <tr>
                          <td>Tanggal Lahir</td>
                          <td>: 10 Mei 1987</td>
                        </tr>
                      </table> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <Link to="/tambah-antrian/data-diri">
                        <legend>Data Diri</legend>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/tambah-antrian/catatan-medis">
                        <legend>Catatan Medis</legend>
                      </Link>
                    </div>
                  </div>
                  <div className="overflowModel">
                    <div className="col-md-12">
                      <Route
                        path="/tambah-antrian/data-diri"
                        component={DataDiri}
                      />
                      <Route
                        path="/tambah-antrian/catatan-medis"
                        component={CatatanMedis}
                      />
                    </div>
                  </div>
                </fieldset>
                <br />
              </div>
              <div className="col-md-6">
                <fieldset className="item2">
                  <legend>Tambah Antrian Pasien</legend>

                  <label for="jenis_pasien">
                    <span>
                      Jenis Pasien
                      <span className="required">*</span>
                    </span>
                    <br />
                    <input
                      defaultChecked
                      type="radio"
                      value="Umum"
                      name="jenis"
                      onClick={() => this.showHide(false)}
                    />
                    Umum
                    <br />
                    <input
                      type="radio"
                      value="Asuransi"
                      name="jenis"
                      onClick={() => this.showHide(true)}
                    />
                    Asuransi
                  </label>
                  <label for="nama_petugas">
                    <span>
                      Nama Petugas
                      <span className="required">*</span>
                    </span>
                    <select name="nama_petugas" className="form-control">
                      <option value="Putra">Putra</option>
                      <option value="Ery">Ery</option>
                    </select>
                  </label>
                  <label for="nama_dokter">
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
                  <label for="poliklinik">
                    <span>
                      Poliklinik
                      <span className="required">*</span>
                    </span>
                    <select name="poliklinik" className="form-control">
                      <option value="Umum">Umum</option>
                      <option value="Gigi">Gigi</option>
                    </select>
                  </label>
                  <label for="tanggal">
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
                    <legend>Asuransi</legend>
                    <label for="kode_asuransi">
                      <span>
                        Kode Asuransi <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="kode_ansuransi"
                        className="form-control"
                      />
                    </label>
                    <label for="sub">
                      <span>
                        Sub <span className="required">*</span>
                      </span>
                      <input type="text" name="sub" className="form-control" />
                    </label>
                    <label for="kelas">
                      <span>
                        kelas <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="kelas"
                        className="form-control"
                      />
                    </label>
                    <label for="faskes">
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
                    <label for="no_kartu">
                      <span>
                        Nomor Kartu <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="no_kartu"
                        className="form-control"
                      />
                    </label>
                    <label for="tanggal_valid">
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
