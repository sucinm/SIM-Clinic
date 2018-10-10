import React, { Component } from "react";
import ItemPemeriksaan from "../../fakedata/itemPemeriksaanLab";

class HasilLaboratorium extends Component {
  daftarItemPemeriksaan() {
    return ItemPemeriksaan.map((el, index) => (
      <tr key={index}>
        <td style={{ paddingLeft: 20 * el.level + "px" }}>{el.item}</td>
        <td>
          <label>
            <input type="text" className="form-control" name="{el.item}" />
          </label>
        </td>
        <td>{el.nilai_normal}</td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          Untuk
          <strong> menyimpan hasil pemeriksaan laboratorium</strong>, lengkapi
          form dan klik "Simpan".
        </div>

        <nav className="navbar">Penunjang Medis (Laboratorium)</nav>
        <div className="form-style">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-hover dataTable">
                    <thead>
                      <th>Item Pemeriksaan</th>
                      <th>Nilai Hasil</th>
                      <th>Nilai Normal</th>
                    </thead>
                    <tbody>{this.daftarItemPemeriksaan()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default HasilLaboratorium;
