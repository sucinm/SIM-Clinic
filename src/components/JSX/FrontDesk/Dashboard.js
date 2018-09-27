import React, { Component } from "react";
import "../../CSS/Form.css";

class Dashboard extends Component {
  render() {
    return (
      <div class="form-style">
        <h3>Pendaftaran Pasien</h3>
        <form>
          <div class="grid-container">
            <fieldset class="item1">
              <legend>Data Diri</legend>
              <label for="no_ktp">
                <span>
                  No KTP <span class="required">*</span>
                </span>
                <input type="text" class="form-control" name="no_ktp" />
              </label>
              <label for="nama_pasien">
                <span>
                  Nama <span class="required">*</span>
                </span>
                <input type="text" class="form-control" name="nama_pasien" />
              </label>
              <label for="tempat_lahir">
                <span>
                  Tempat Lahir <span class="required">*</span>
                </span>
                <input type="text" class="form-control" name="tempat_lahir" />
              </label>
              <label for="agama">
                <span>Agama</span>
                <select name="agama" class="select-field">
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Budha">Budha</option>
                  <option value="Hindu">Hindu</option>
                </select>
              </label>
              <label for="jenis_kelamin">
                <span>Jenis Kelamin</span>
                <select name="jenis_kelamin" class="select-field">
                  <option value="P">Perempuan</option>
                  <option value="L">Laki-laki</option>
                </select>
              </label>
              <label for="status">
                <span>Status</span>
                <select name="status" class="select-field">
                  <option value="Belum Menikah">Belum Menikah</option>
                  <option value="Sudah Menikah">Sudah Menikah</option>
                </select>
              </label>
              <label for="alamat">
                <span>
                  Alamat <span class="required">*</span>
                </span>
                <textarea name="alamat" class="textarea-field" />
              </label>
              <label for="kecamatan">
                <span>Kecamatan</span>
                <select name="kecamatan" class="select-field">
                  <option value="Sail">Sail</option>
                  <option value="Rumbai">Rumbai</option>
                </select>
              </label>
              <label for="kelurahan">
                <span>Kelurahan</span>
                <select name="kelurahan" class="select-field">
                  <option value="Tenayan Raya">Tenayan Raya</option>
                  <option value="...">...</option>
                </select>
              </label>
              <label for="kode_pos">
                <span>
                  Kode Pos <span class="required">*</span>
                </span>
                <input type="text" class="form-control" name="kode_pos" />
              </label>
              <label for="telpon">
                <span>
                  Telpon <span class="required">*</span>
                </span>
                <input type="text" class="form-control" name="telpon" />
              </label>
            </fieldset>
            <div>
              <fieldset class="item2">
                <legend>Pendidikan</legend>
                <label for="pendidikan">
                  <span>Pendidikan</span>
                  <input type="text" class="form-control" name="pendidikan" />
                </label>
                <label for="kantor">
                  <span>Kantor</span>
                  <input type="text" class="form-control" name="kantor" />
                </label>
                <label for="nama_perusahaan">
                  <span>
                    <span>Nama Perusahaan </span>
                  </span>
                  <textarea name="nama_perusahaan" class="textarea-field" />
                </label>
              </fieldset>
              <fieldset class="item3">
                <legend>Penanggung Jawab</legend>
                <label for="nama_penanggungjawab">
                  <span>Nama</span>
                  <input
                    type="text"
                    class="form-control"
                    name="nama_penanggungjawab"
                  />
                </label>
                <label for="alamat_penanggungjawab">
                  <span>
                    <span>Alamat </span>
                  </span>
                  <textarea
                    name="alamat_penanggungjawab"
                    class="textarea-field"
                  />
                </label>
                <label for="telpon_penanggungjawab">
                  <span>Telpon</span>
                  <input
                    type="text"
                    class="form-control"
                    name="telpon_penanggungjawab"
                  />
                </label>
                <label for="status_penanggungjawab">
                  <span>Status</span>
                  <input
                    type="text"
                    class="form-control"
                    name="status_penanggungjawab"
                  />
                </label>
              </fieldset>
              <label>
                <input type="submit" value="Simpan" />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Dashboard;
