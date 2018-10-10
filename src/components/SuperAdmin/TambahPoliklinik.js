import React, { Component } from "react";

class TambahPoliklinik extends Component {
  render() {
    return (
      <div className="col-md-12">
        <fieldset>
          <legend>Tambah Daftar Poliklinik</legend>
          <label>
            <span>
              Nama Poliklinik <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="nama_poli" />
          </label>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahPoliklinik;
