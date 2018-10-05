import React, { Component } from "react";

class TambahResepObat extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <fieldset className="item1">
          <legend>Resep Obat</legend>
          <label>
            <span>Nama Obat</span>
            <select
              name="nama_obat"
              className="form-control"
              onkeyup="filterFunction()"
            >
              {/* {this.daftarObat()} */}
            </select>
          </label>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahResepObat;
