import React, { Component } from "react";
import obat from "../../fakedata/daftarObat";
import IconPlus from "../../assets/imgs/plus.png";
import IconTrash from "../../assets/imgs/trash.png";

class TambahResepObat extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      nama_obat: []
    };
  }

  componentWillMount() {
    this.setState({ selector: obat[0].nama });
  }

  tambah() {
    var array = [...this.state.nama_obat];
    // array.push(this.refs.nama.value);
    array.push(this.state.selector);
    this.setState({ nama_obat: array });
  }

  hapus() {
    var array = [...this.state.nama_obat];
    // var index = array.indexOf(x);
    // array.splice(index, 1);
    for (var i = 0; i < this.state.nama_obat.length; i++) {
      if (this.state.nama_obat[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ nama_obat: array });
  }
  daftarResep() {
    return this.state.nama_obat.map((nama_obat, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{nama_obat}</td>
        <td>
          <input type="number" name="jumlah" className="form-control" />
        </td>
        <td>
          <input type="text" name="keterangan" className="form-control" />
        </td>
      </tr>
    ));
  }
  daftarObat() {
    return obat.map((el, index) => (
      <option value={el.nama} key={index}>
        {el.nama}
      </option>
    ));
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Resep Obat</legend>
          <div className="form-group">
            <label>
              <span>Nama Obat</span>
              <select
                onChange={event =>
                  this.setState({
                    selector: event.target.value
                  })
                }
                ref="nama"
                className="form-control"
              >
                {this.daftarObat()}
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
                  <th>Nama Obat</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>{this.daftarResep()}</tbody>
            </table>
          </div>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahResepObat;
