import React, { Component } from "react";

class ResepObat extends Component {
  render() {
    return (
      <div className="col-md-6">
        <fieldset>
          <legend>Resep Obat</legend>
          <div className="table-responsive">
            <table className="table table-hover dataTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Obat</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abbocath </td>
                  <td>5 tablet</td>
                  <td>Setelah makan 3x1 hari</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Asolute </td>
                  <td>7 kapsul</td>
                  <td>Setelah makan 3x1 hari</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ResepObat;
