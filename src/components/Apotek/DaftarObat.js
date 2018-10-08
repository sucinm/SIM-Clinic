import React, { Component } from "react";
import obat from "../../fakedata/daftarObat";

class DaftarObat extends Component {
  daftarObat() {
    return obat.map((el, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{el.nama}</td>
        <td>{el.kategori}</td>
        <td>
          {el.persediaan} {el.satuan}
        </td>
        <td>{el.harga_beli}</td>
        <td>{el.harga_jual}</td>
        <td>{el.masa_berlaku}</td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="col-md-6">
        <div className="table-responsive">
          <table className="table table-hover dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Obat</th>
                <th>Kategori</th>
                <th>Jumlah Persediaan</th>
                <th>Harga Beli</th>
                <th>Harga Jual</th>
                <th>Masa Berlaku</th>
              </tr>
            </thead>
            <tbody>{this.daftarObat()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default DaftarObat;
