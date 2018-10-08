import React, { Component } from "react";
import tindakanLaboratorium from "../../fakedata/daftarItemLab";
import IconPlus from "../../assets/imgs/plus.png";
import IconTrash from "../../assets/imgs/trash.png";

class TambahTindakanLaboratorium extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      nama_tindakanLaboratorium: []
    };
  }

  componentWillMount() {
    this.setState({ selector: tindakanLaboratorium[0].item_transaksi });
  }

  tambah() {
    var array = [...this.state.nama_tindakanLaboratorium];
    array.push(this.state.selector);
    this.setState({ nama_tindakanLaboratorium: array });
  }

  hapus() {
    var array = [...this.state.nama_tindakanLaboratorium];
    for (var i = 0; i < this.state.nama_tindakanLaboratorium.length; i++) {
      if (this.state.nama_tindakanLaboratorium[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ nama_tindakanLaboratorium: array });
  }
  doTindakanLaboratorium() {
    return this.state.nama_tindakanLaboratorium.map(
      (nama_tindakanLaboratorium, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nama_tindakanLaboratorium}</td>
          <td>
            <input type="number" name="jumlah" className="form-control" />
          </td>
          <td>
            <input type="text" name="tarif" className="form-control" />
          </td>
        </tr>
      )
    );
  }
  daftarItemLab() {
    return tindakanLaboratorium.map((el, index) => (
      <option value={el.id_item} key={index}>
        {el.item_transaksi}
        ---Rp.
        {el.tarif}
      </option>
    ));
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Tindakan Laboratorium</legend>
          <div className="form-group">
            <label>
              <span>Item Transaksi</span>
              <select
                onChange={event =>
                  this.setState({
                    selector: event.target.value
                  })
                }
                ref="nama"
              >
                {this.daftarItemLab()}
              </select>

              <img
                src={IconPlus}
                alt="tambah"
                style={{ width: "30px" }}
                onClick={() => {
                  this.tambah();
                }}
              />
              <img
                src={IconTrash}
                alt="hapus"
                style={{ width: "30px" }}
                onClick={() => {
                  this.hapus();
                }}
              />
            </label>
          </div>
          <div className="table-responsive">
            <table className="table table-hover dataTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Transaksi</th>
                  <th>Jumlah</th>
                  <th>Tarif</th>
                </tr>
              </thead>
              {this.doTindakanLaboratorium()}
            </table>
          </div>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahTindakanLaboratorium;
