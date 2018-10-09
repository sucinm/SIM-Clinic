import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import DataDiri from "./DataDiri";
import CatatanMedis from "./CatatanMedis";

class DetailPasien extends Component {
  render() {
    return (
      <div className="col-md-6">
        <fieldset className="item1">
          <legend>Data Pasien</legend>
          <div className="row">
            <div className="col-sm-6">
              <Link to="/tambah-antrian/data-diri">
                <legend>Data Diri</legend>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/tambah-antrian/catatan-medis">
                <legend>Catatan Medis</legend>
              </Link>
            </div>
          </div>
          <div className="overflowModel">
            <div className="col-md-12">
              <Route path="?/data-diri" component={DataDiri} />
              <Route path="?/catatan-medis" component={CatatanMedis} />
            </div>
          </div>
        </fieldset>
        <br />
      </div>
    );
  }
}
export default DetailPasien;
