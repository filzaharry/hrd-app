import React, { useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import { ImageProfile } from "../../assets";
import { Back, Button, Gap } from "../../components";
import { setDataUser } from "../../config/redux/action";

const UserSettings = () => {
  const { dataUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setDataUser());
  }, [dispatch]);  

  const logOut = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message:
        "Apakah Anda Yakin ingin Keluar ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            localStorage.clear()
            window.location.reload();
          },
        },
        {
          label: "No",
          onClick: () => alert("User Tidak Setuju"),
        },
      ],
    });
  }
  
  
  const departemen = dataUser.departemenId;
  const jabatan = dataUser.jabatanId;
console.log(dataUser)
  if (departemen || jabatan) {
  return (
    <div className="container">
      <Back title="Kembali ke Dashboard" route="/user-settings" onClick={()=> history.push('/')} />
      <Gap height={10} />
      <div className="col">
      <h3>User Profile</h3>
        <div className="ml-2 row">
          <Gap height={30} />
          <div class="form-group col-lg-6">
            <label for="username">Nama Administrator :</label>
            <input
              type="text"
              className="form-control disabled"
              id="namaLengkap"
              placeholder={dataUser.namaLengkap}
              disabled
            />
            <Gap height={20} />
            <label for="username">Departemen :</label>
            <input
              type="text"
              className="form-control disabled disabled"
              id="namaLengkap"
              placeholder={departemen.nama_dep}
              disabled
            />
            <Gap height={20} />
            <label for="username">Jabatan :</label>
            <input
              type="text"
              className="form-control disabled"
              id="namaLengkap"
              placeholder={jabatan.nama_jab}
              disabled
            />
            <Gap height={10} />
            <hr/>
            <label for="username">Username :</label>
            <input
              type="text"
              className="form-control disabled"
              id="username"
              placeholder={dataUser.username}
              disabled
            />
            <Gap height={20} />
            <label for="email">Email :</label>
            <input
              type="email"
              className="form-control disabled"
              id="username"
              placeholder={dataUser.email}
              disabled
            />
            <Gap height={40} />
            <Button style={{float: "right"}} title="Logout" onClick={logOut} />
          </div>
          <div className="col-lg-6" >
              <img src={ImageProfile} alt="imageprofile" />
          </div>
        </div>
      </div>
    </div>
    )
  }
  return (
    <div className="text-center mt-4">
      <Spinner type="grow" variant="warning" />
    </div>
  );
};

export default UserSettings;
