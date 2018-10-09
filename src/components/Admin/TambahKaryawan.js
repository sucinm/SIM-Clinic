import React, { Component } from "react";

class TambahObat extends Component {
  render() {
    return (
      <div className="col-md-6">
        <fieldset>
          <legend>Tambah Daftar Obat</legend>
          <label>
            <span>
              Nama Obat <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="nama_obat" />
          </label>
          <label>
            <span>
              keterangan <span className="required">*</span>
            </span>
            <select name="keterangan_obat">
              <option value="Minum">Minum</option>
              <option value="Makan">Makan</option>
            </select>
          </label>
          <label>
            <span>
              Jumlah Persediaan <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="stok_obat" />
            <select name="satuan_obat">
              <option value="pcs">pcs</option>
              <option value="botol">botol</option>
            </select>
          </label>
          <label>
            <span>
              Masa Berlaku <span className="required">*</span>
            </span>
            <input type="date" className="form-control" name="masa_berlaku" />
          </label>
          <label>
            <span>
              Harga Beli <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="harga_beli" />
          </label>
          <label>
            <span>
              Harga Jual <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="harga_jual" />
          </label>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahObat;
