import React, { Component } from "react";

class TambahSoap extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <fieldset>
            <legend>Vital Sign</legend>
            <label>
              <span>
                Vital Sign <span className="required">*</span>
              </span>
              <textarea name="vital_sign" className="form-control" />
            </label>
          </fieldset>
          <br />
        </div>
        <div className="col-sm-6">
          <fieldset>
            <legend>SOAP</legend>
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
              <textarea name="assesment" className="form-control" />
            </label>
            <label>
              <span>
                Planning <span className="required">*</span>
              </span>
              <textarea name="planning" className="form-control" />
            </label>
            <label>
              <span>
                Diagnosa <span className="required">*</span>
              </span>
              <input type="text" className="form-control" name="diagnosa" />
            </label>
          </fieldset>
          <br />
        </div>
      </div>
    );
  }
}

export default TambahSoap;
