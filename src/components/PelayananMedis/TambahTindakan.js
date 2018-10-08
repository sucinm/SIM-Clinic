import React, { Component } from "react";
// import tindakan from "../../fakedata/daftartindakan";
import IconPlus from "../../assets/imgs/plus.png";
import IconTrash from "../../assets/imgs/trash.png";

class TambahTindakan extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      nama_tindakan: []
    };
  }

  // componentWillMount() {
  //   this.setState({ selector: tindakan[0].nama });
  // }

  tambah() {
    var array = [...this.state.nama_tindakan];
    array.push(this.state.selector);
    this.setState({ nama_tindakan: array });
  }

  hapus() {
    var array = [...this.state.nama_tindakan];
    for (var i = 0; i < this.state.nama_tindakan.length; i++) {
      if (this.state.nama_tindakan[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ nama_tindakan: array });
  }
  doTindakan() {
    return this.state.nama_tindakan.map((nama_tindakan, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{nama_tindakan}</td>
        <td>
          <input type="number" name="jumlah" className="form-control" />
        </td>
        <td>
          <input type="text" name="keterangan" className="form-control" />
        </td>
      </tr>
    ));
  }
  // daftarTindakan() {
  //   return tindakan.map((el, index) => (
  //     <option value={el.nama} key={index}>
  //       {el.nama}
  //     </option>
  //   ));
  // }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Tindakan</legend>
          <div className="form-group">
            <label>
              <span>Nama Tindakan</span>
              <select
                onChange={event =>
                  this.setState({
                    selector: event.target.value
                  })
                }
                ref="nama"
              >
                {/* {this.daftarTindakan()} */}
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
                  <th>Nama Tindakan</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              {/* <tbody>{this.daftarTindakan()}</tbody> */}
            </table>
          </div>
        </fieldset>
        <br />
      </div>
    );
  }
}

export default TambahTindakan;
