import React, { Component } from "react";

class TambahObat extends Component {
  render() {
    return (
      <div className="col-md-12">
        <fieldset>
          <legend>Tambah Karyawan Baru</legend>
          <label>
            <span>
              Nama Karyawan <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="nama_obat" />
          </label>
          <label>
            <span>
              NIK <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="nik" />
          </label>
          <label>
            <span>
              Peran <span className="required">*</span>
            </span>
            <select name="peran">
              <option value="1">Perawat</option>
              <option value="2">Dokter</option>
            </select>
          </label>
          <label>
            <span>
              Poliklinik <span className="required">*</span>
            </span>
            <select name="peran">
              <option value="1">Umum</option>
              <option value="2">Gigi</option>
            </select>
          </label>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahObat;
