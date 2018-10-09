import React, { Component } from "react";
import DaftarPasien from "../../components/FrontDesk/DaftarPasien";

class ResepObat extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="form-style">
          <DaftarPasien />
          <br />
        </div>
      </div>
    );
  }
}

export default ResepObat;
