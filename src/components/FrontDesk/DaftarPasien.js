import React, { Component } from "react";

class DaftarPasien extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover dataTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Nomor Rekam Medis</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Umur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12121211222</td>
              <td>Budi Anugrah Setiawan</td>
              <td>Laki-laki</td>
              <td>24 tahun 5 bulan 6 hari</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default DaftarPasien;
