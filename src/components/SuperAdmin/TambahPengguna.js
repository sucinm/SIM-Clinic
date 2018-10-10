import React, { Component } from "react";

class TambahPengguna extends Component {
  render() {
    return (
      <div className="col-md-12">
        <fieldset>
          <legend>Tambah Pengguna</legend>
          <label>
            <span>
              Nama <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="nama" />
          </label>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input type="text" className="form-control" name="username" />
          </label>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input type="password" className="form-control" name="password" />
          </label>
          <label>
            <span>
              Peran <span className="required">*</span>
            </span>
            <br />
            <input type="checkbox" name="peran" value="1" /> Pendaftaran
            <br />
            <input type="checkbox" name="peran" value="2" /> Poliklinik
            <br />
            <input type="checkbox" name="peran" value="3" /> Apotek
            <br />
            <input type="checkbox" name="peran" value="4" /> Kasir
            <br />
          </label>
        </fieldset>
        <br />
        <div className="table-responsive">
          <table className="table table-hover dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>NIK</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Peran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12121211222</td>
                <td>Budi Anugrah Setiawan</td>
                <td>BudiNS</td>
                <td>Pendaftaran, Apotek, Laboratorium</td>
              </tr>
              <tr>
                <td>2</td>
                <td>12121211222</td>
                <td>Anugrah Setiawan</td>
                <td>AnugrahS</td>
                <td>Poliklinik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TambahPengguna;
