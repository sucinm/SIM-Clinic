import React, { Component } from "react";

class TambahTindakan extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <fieldset className="item1">
          <legend>Daftar Tindakan</legend>
          <label>
            <span>Nama Tindakan</span>
            <select name="nama_tindakan" className="form-control">
              {/* {this.daftarObat()} */}
            </select>
          </label>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahTindakan;
