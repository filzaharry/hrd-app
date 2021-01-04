import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Gap } from "../../components";

const UserSettings = () => {
  return (
    <div className="container">
      <Gap height={30} />
      <h1>Pengaturan</h1>
      <div className="col">
        <div className="ml-2">
          <Gap height={30} />
          <div class="form-group col-lg-8">
            <div className="row">
              <Gap width={15} />
              <Button title="Reset Password" />
              <Gap width={20} />
              <Button title="Logout" />
            </div>
            <Gap height={30} />
            <label for="username">Ganti Username :</label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <Gap height={20} />
            <label for="username">Ganti Email :</label>
            <input
              type="email"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <Gap height={40} />
            <button className="btn btn-info" style={{float: "right"}}>
              <FontAwesomeIcon icon={faSave} /> Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
