import React, { useEffect, useState } from "react";
import axios from "axios";
import "../mor.css";
import { useLocation } from "react-router-dom";
import SelectBox from "../components/base/SingleSelect";

const LockatedReact = () => {
  const [moveOptions, setMoveOptions] = useState([]);
  const [moveFrom, setMoveFrom] = useState(null);
  const [moveTo, setMoveTo] = useState(null);
  const [copyFrom, setCopyFrom] = useState(null);
  const [copyTo, setCopyTo] = useState(null);
  const [activeTab, setActiveTab] = useState("move"); // "move" or "clone"

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(
          `https://app.lockated.com/pms/account_setups/get_fm_users.json?token=${token}`
        );

        if (response.data && Array.isArray(response.data.users)) {
          const formattedOptions = response.data.users.map((user) => ({
            value: user.id,
            label: `${user.firstname} ${user.lastname}`,
          }));
          setMoveOptions(formattedOptions);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [token]);

  const handleTabChange = (tab) => setActiveTab(tab);
  const handleSubmit = async () => {
    let postData;

    if (activeTab === "move") {
      postData = {
        type: "move",
        move_from_id: moveFrom,
        move_to_id: moveTo,
      };
    } else {
      postData = {
        copy_from_id: copyFrom,
        copy_to_id: copyTo,
      };
    }

    console.log("Submitting Data:", postData);

    try {
      const response = await axios.post(
        `https://app.lockated.com/pms/custom_forms/clone_checklist_to_user.json?token=${token}`,
        postData
      );

      console.log("POST API Response:", response.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <div className="main-content">
      <div className="website-content overflow-auto">
        <div className="module-data-section container-fluid">
          <div className="card mx-4 mt-4">
            <div className="lockated-react-card">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={`nav-link lockated-tab me-2 ${
                      activeTab === "move" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("move")}
                  >
                    Move Now
                  </button>
                  <button
                    className={`nav-link lockated-tab ${
                      activeTab === "clone" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("clone")}
                  >
                    Clone Now
                  </button>
                </div>
              </nav>
              <div
                className="tab-content lockated-tab-child"
                id="nav-tabContent"
              >
                {/* Move Now Tab */}
                {activeTab === "move" && (
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-md-6 mt-1">
                        <div className="form-group">
                          <label>Move From</label>
                          <SelectBox
                            options={moveOptions}
                            onChange={(selected) => {
                              console.log("Selected MoveFrom:", selected);
                              setMoveFrom(selected);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-1">
                        <div className="form-group">
                          <label>Move To</label>
                          <SelectBox
                            options={moveOptions}
                            onChange={(selected) => {
                              console.log("Selected MoveFrom:", selected);
                              setMoveTo(selected);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Clone Now Tab */}
                {activeTab === "clone" && (
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-md-6 mt-1">
                        <div className="form-group">
                          <label>Copy From</label>
                          <SelectBox
                            options={moveOptions}
                            onChange={(selected) => {
                              console.log("Selected copyFrom:", selected);
                              setCopyFrom(selected);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-1">
                        <div className="form-group">
                          <label>Copy To</label>
                          <SelectBox
                            options={moveOptions}
                            onChange={(selected) => {
                              console.log("Selected copyTo:", selected);
                              setCopyTo(selected);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button className="purple-btn2" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockatedReact;
