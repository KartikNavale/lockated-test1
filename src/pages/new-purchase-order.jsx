import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "material-icons/iconfont/material-icons.css";
import SelectBox from "../components/base/SingleSelect";

const NewPurchaseOrder = () => {
  const [rows, setRows] = useState([{ id: Date.now() }]);

  const addRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  return (
    <>
      <div className="main-content">
        <div className="website-content overflow-auto">
          <div className="module-data-section container-fluid">
            <h5>NEW PURCHASE ORDER</h5>
            <div className="card mx-4 mt-4">
              <h5 className="m-2 d-flex align-items-center">
                <span className="material-icons orange-bg me-2">alarm</span>
                <span className="title">SUPPLIER DETAILS</span>
              </h5>
              <div className="card-body mt-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Supplier<span>*</span>
                      </label>
                      <SelectBox />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Plant Detail<span>*</span>
                      </label>
                      <SelectBox />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        PO Date<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="date"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>
                        Billing Address<span>*</span>
                      </label>
                      <SelectBox />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>
                        Delivery Address<span>*</span>
                      </label>
                      <SelectBox />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>Related To</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>Retention(%)</label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>TDS(%)</label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>QC(%)</label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>Payment Tenure(In Days)</label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-2">
                    <div className="form-group">
                      <label>Advance Amount</label>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 mt-2">
                    <div class="form-group">
                      <label>Terms & Conditions</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Enter ..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mx-4 mt-4">
              <h5 className="m-2 d-flex align-items-center">
                <span className="material-icons orange-bg me-2">settings</span>
                <span className="title">ITEM DETAILS</span>
              </h5>
              <div className="card-body mt-0">
                {rows.map((row) => (
                  <div className="row row-one" key={row.id}>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Item Details</label>
                        <SelectBox />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>SAC/HSN Code</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Quantity</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>Select Unit</label>
                        <SelectBox />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>
                          Expected Date <span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>Rate</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>CGST Rate</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>CGST Amt</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>SGST Rate</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>SGST Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>IGST Rate</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>IGST Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>TCS Rate</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>TCS Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>Tax Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-2">
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 mt-2 d-flex justify-content-center align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                        onClick={() => removeRow(row.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                    </div>
                  </div>
                ))}
                <div className="row mt-4">
                  <div className="col-md-2">
                    <button className="purple-btn2" onClick={addRow}>
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="purple-btn2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPurchaseOrder;
