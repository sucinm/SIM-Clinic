import React, { Component } from "react";
import obat from "../../fakedata/daftarObat";

class DaftarObat extends Component {
  daftarObat() {
    return obat.map((el, index) => (
      <tr key={index}>
        <td>{el.id}</td>
        <td>{el.nama}</td>
        <td>
          {el.persediaan} {el.satuan}
        </td>
        <td>{el.masa_berlaku}</td>
        <td>{el.harga}</td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover dataTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Obat</th>
              <th>Jumlah Persediaan</th>
              <th>Keterangan</th>
              <th>Masa Berlaku</th>
            </tr>
          </thead>
          <tbody>{this.daftarObat()}</tbody>
        </table>
      </div>
    );
  }
}
export default DaftarObat;
