import React, { Component } from "react";
import ICDcode from "../../fakedata/daftarICD";
import IconPlus from "../../assets/imgs/plus.png";
import IconTrash from "../../assets/imgs/trash.png";

class TambahSoap extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      diagnosa: []
    };
  }

  componentWillMount() {
    this.setState({ selector: ICDcode[0].description });
  }

  tambah() {
    var array = [...this.state.diagnosa];
    array.push(this.state.selector);
    this.setState({ diagnosa: array });
  }

  hapus() {
    var array = [...this.state.diagnosa];
    for (var i = 0; i < this.state.diagnosa.length; i++) {
      if (this.state.diagnosa[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ diagnosa: array });
  }
  daftarDiagnosa() {
    return this.state.diagnosa.map((diagnosa, index) => (
      <tr key={index}>
        <td>{diagnosa}</td>
      </tr>
    ));
  }
  daftarICD() {
    return ICDcode.map((el, index) => (
      <option value={el.code} key={index}>
        {el.description}
      </option>
    ));
  }
  render() {
    return (
      <div className="col-md-6">
        <fieldset>
          <legend>SOAP</legend>
          <div className="row">
            <div className="col-md-4">
              <label>
                <span>
                  Sistol <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Diastol <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Suhu <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Pulse <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Respirasi <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Tinggi Badan <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <label>
                <span>
                  Berat Badan <span className="required">*</span>
                </span>
                <input type="number" className="form-control" name="sistol" />
              </label>
              <br />
            </div>
            <div className="col-md-8">
              <label>
                <span>
                  Subjective <span className="required">*</span>
                </span>
                <textarea name="subjective" className="form-control" />
              </label>
              <label>
                <span>
                  Objective <span className="required">*</span>
                </span>
                <textarea name="objective" className="form-control" />
              </label>
              <label>
                <span>
                  Assesment <span className="required">*</span>
                </span>
                <textarea name="assemdent" className="form-control" />
              </label>
              <label>
                <span>
                  Planning <span className="required">*</span>
                </span>
                <textarea name="planning" className="form-control" />
              </label>
              <label>
                <span>Diagnosa</span>
                <select
                  onChange={event =>
                    this.setState({
                      selector: event.target.value
                    })
                  }
                  ref="nama"
                  className="form-control"
                >
                  <option disabled>---ICD Code---</option>
                  {this.daftarICD()}
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
              <div className="table-responsive">
                <table className="table table-hover dataTable">
                  <tbody>{this.daftarDiagnosa()}</tbody>
                </table>
              </div>
            </div>

            <br />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default TambahSoap;
