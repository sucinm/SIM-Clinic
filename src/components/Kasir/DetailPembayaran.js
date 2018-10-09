import React, { Component } from "react";

class DetailPembayaran extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-hover dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Transaksi</th>
                <th>Julmah</th>
                <th>Harga</th>
                <th>Total Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abbocath </td>
                <td>5 tablet</td>
                <td>Rp 1000</td>
                <td>Rp 5000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Asolute </td>
                <td>7 kapsul</td>
                <td>Rp 3000</td>
                <td>Rp 21.000</td>
              </tr>
              <tr>
                <td colSpan="4">Total</td>
                <td>Rp 26.000</td>
              </tr>

              <tr>
                <td colSpan="4">Disc (%)</td>
                <td>
                  <input type="number" name="diskon" className="form-control" />
                </td>
              </tr>

              <tr>
                <td colSpan="4">Total Pembayaran</td>
                <td>Rp 26.000</td>
              </tr>

              <tr>
                <td colSpan="4">Jenis Pembayaran</td>
                <td>
                  <select name="jenis_pembayaran" className="form-control">
                    <option value="0"> asuransi / jaminan </option>
                    <option value="1"> tunai</option>
                    <option value="2"> kredit</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default DetailPembayaran;
