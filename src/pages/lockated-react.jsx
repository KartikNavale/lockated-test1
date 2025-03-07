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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(
          `https://app.lockated.com/pms/account_setups/get_fm_users.json?token=${token}`
        );

        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.users)) {
          const formattedOptions = response.data.users.map((user) => ({
            value: user.id,
            label: `${user.firstname} ${user.lastname}`,
          }));

          console.log("Formatted Options:", formattedOptions);
          setMoveOptions(formattedOptions);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [token]); // Fetch when token changes

  // Handlers for SelectBox
  const handleMoveFromChange = (selected) => {
    setMoveFrom(selected?.value);
  };

  const handleMoveToChange = (selected) => {
    setMoveTo(selected?.value);
  };

  const handleCopyFromChange = (selected) => {
    setCopyFrom(selected?.value);
  };

  const handleCopyToChange = (selected) => {
    setCopyTo(selected?.value);
  };

  // Submit Handler (POST API Call)
  const handleSubmit = async () => {
    const postData = {
      move_from: moveFrom,
      move_to: moveTo,
      copy_from: copyFrom,
      copy_to: copyTo,
    };

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
                    className="nav-link active lockated-tab me-2"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Move Now
                  </button>
                  <button
                    className="nav-link lockated-tab"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
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
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-md-6 mt-1">
                      <div className="form-group">
                        <label>Move From</label>
                        <SelectBox
                          options={moveOptions}
                          onChange={handleMoveFromChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-1">
                      <div className="form-group">
                        <label>Move To</label>
                        <SelectBox
                          options={moveOptions}
                          onChange={handleMoveToChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clone Now Tab */}
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-md-6 mt-1">
                      <div className="form-group">
                        <label>Copy From</label>
                        <SelectBox
                          options={moveOptions}
                          onChange={handleCopyFromChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-1">
                      <div className="form-group">
                        <label>Copy To</label>
                        <SelectBox
                          options={moveOptions}
                          onChange={handleCopyToChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
