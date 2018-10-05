import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Form.css";
import provinsi from "../../fakedata/daftarProvinsi";

class TambahPasien extends Component {
  daftarProvinsi() {
    return provinsi.map((el, index) => (
      <option value="Sail" key={index}>
        {el.nama}
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
        <nav className="navbar">Pendaftaran Pasien Baru</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <fieldset className="item1">
                  <legend>Data Diri</legend>
                  <label>
                    <span>
                      No KTP <span className="required">*</span>
                    </span>
                    <input type="text" className="form-control" name="no_ktp" />
                  </label>
                  <label>
                    <span>
                      Nama <span className="required">*</span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="nama_pasien"
                    />
                  </label>
                  <label>
                    <span>
                      Tempat Lahir <span className="required">*</span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="tempat_lahir"
                    />
                  </label>
                  <label>
                    <span>Agama</span>
                    <select name="agama" className="form-control">
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Budha">Budha</option>
                      <option value="Hindu">Hindu</option>
                    </select>
                  </label>
                  <label>
                    <span>Jenis Kelamin</span>
                    <select name="jenis_kelamin" className="form-control">
                      <option value="P">Perempuan</option>
                      <option value="L">Laki-laki</option>
                    </select>
                  </label>
                  <label>
                    <span>Status</span>
                    <select name="status" className="form-control">
                      <option value="Belum Menikah">Belum Menikah</option>
                      <option value="Sudah Menikah">Sudah Menikah</option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Alamat <span className="required">*</span>
                    </span>
                    <textarea name="alamat" className="form-control" />
                  </label>
                  <label>
                    <span>Provinsi</span>
                    <select
                      name="provinsi"
                      className="form-control"
                    >
                      {this.daftarProvinsi()}
                    </select>
                  </label>
                  <label>
                    <span>Kecamatan</span>
                    <select name="kecamatan" className="form-control">
                      <option value="Sail">Sail</option>
                      <option value="Rumbai">Rumbai</option>
                    </select>
                  </label>
                  <label>
                    <span>Kelurahan</span>
                    <select name="kelurahan" className="form-control">
                      <option value="Tenayan Raya">Tenayan Raya</option>
                      <option value="...">...</option>
                    </select>
                  </label>
                  <label>
                    <span>
                      Kode Pos <span className="required">*</span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="kode_pos"
                    />
                  </label>
                  <label>
                    <span>
                      Telpon <span className="required">*</span>
                    </span>
                    <input type="text" className="form-control" name="telpon" />
                  </label>
                </fieldset>
                <br />
              </div>
              <div className="col-sm-6">
                <fieldset className="item2">
                  <legend>Pendidikan</legend>
                  <label>
                    <span>Pendidikan</span>
                    <input
                      type="text"
                      className="form-control"
                      name="pendidikan"
                    />
                  </label>
                  <label>
                    <span>Kantor</span>
                    <input type="text" className="form-control" name="kantor" />
                  </label>
                  <label>
                    <span>
                      <span>Nama Perusahaan </span>
                    </span>
                    <textarea name="nama_perusahaan" className="form-control" />
                  </label>
                </fieldset>
                <br />

                <fieldset className="item3">
                  <legend>Penanggung Jawab</legend>
                  <label>
                    <span>Nama</span>
                    <input
                      type="text"
                      className="form-control"
                      name="nama_penanggungjawab"
                    />
                  </label>
                  <label>
                    <span>
                      <span>Alamat </span>
                    </span>
                    <textarea
                      name="alamat_penanggungjawab"
                      className="form-control"
                    />
                  </label>
                  <label>
                    <span>Telpon</span>
                    <input
                      type="text"
                      className="form-control"
                      name="telpon_penanggungjawab"
                    />
                  </label>
                  <label>
                    <span>Status</span>
                    <input
                      type="text"
                      className="form-control"
                      name="status_penanggungjawab"
                    />
                  </label>
                </fieldset>
                <label style={{ margin: "10px auto", float: "right" }}>
                  <Link to="/tambah-antrian/data-diri">
                    <button type="button" className="btn btn-info btn-sm">
                      Simpan
                    </button>
                  </Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TambahPasien;
