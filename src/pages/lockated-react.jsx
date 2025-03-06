import React, { useEffect, useState } from "react";
import axios from "axios";
import "../mor.css";
import { useLocation } from "react-router-dom"; // ✅ Use useLocation()
import SelectBox from "../components/base/SingleSelect";

const LockatedReact = () => {
  const [moveOptions, setMoveOptions] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  useEffect(() => {
    const fetchMoveOptions = async () => {
      try {
        const response = await axios.get(
          `https://app.lockated.com/pms/account_setups/get_fm_users.json?token=${token}`
        );

        console.log("API Response:", response.data);

        console.log("API Response:", response.data); // Debugging

        // Check if response.data has expected structure
        if (response.data && Array.isArray(response.data.users)) {
          const formattedOptions = response.data.users.map((user) => ({
            value: user.id,
            label: `${user.firstname} ${user.lastname}`,
          }));

          console.log(formattedOptions);
          setMoveOptions(formattedOptions);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching Move options:", error);
      }
    };

    fetchMoveOptions();
  }, []);

  // Handlers for SelectBox
  const handleMoveFromChange = (selected) => {
    console.log("Move From Selected:", selected);
  };

  const handleMoveToChange = (selected) => {
    console.log("Move To Selected:", selected);
  };

  return (
    <div className="main-content">
      <div className="website-content overflow-auto">
        <div className="module-data-section container-fluid">
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
          <div className="tab-content lockated-tab-child" id="nav-tabContent">
            {/* Move Now Tab */}
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-md-2 mt-1">
                  <div className="form-group">
                    <label>Move From</label>
                    <SelectBox
                      options={moveOptions}
                      onChange={handleMoveFromChange}
                    />
                  </div>
                </div>
                <div className="col-md-2 mt-1">
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
                <div className="col-md-2 mt-1">
                  <div className="form-group">
                    <label>Copy From</label>
                    <SelectBox
                      onChange={(selected) =>
                        console.log("Copy From Selected:", selected)
                      }
                    />
                  </div>
                </div>
                <div className="col-md-2 mt-1">
                  <div className="form-group">
                    <label>Copy To</label>
                    <SelectBox
                      onChange={(selected) =>
                        console.log("Copy To Selected:", selected)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockatedReact;
