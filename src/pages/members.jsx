import React from "react";
import { Link } from "react-router-dom";
import "../mor.css";

const Members = () => {
  return (
    <>
      <div className="main-content ">
        <div className="website-content overflow-auto">
          <div className="module-data-section container-fluid">
            <h1>ewe</h1>
            <ul>
              <li>
                <Link to="/lockated-react">Lockated React</Link>
              </li>
              <li>
                <Link to="/new-purchase-order">New Purchase Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
