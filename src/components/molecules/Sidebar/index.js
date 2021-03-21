import React, { Fragment } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { useHistory } from "react-router-dom";
import {
  Logo,
  DashboardIC,
  DepartemendIC,
  JabatanIC,
  KaryawanIC,
  TentangIC,
} from "../../../assets";
import "./sidebar.scss";



const Sidebar = () => {
  const history = useHistory();

  const buttonKaryawan = () => {
    history.push('/karyawan') 
    window.location.reload();
  }
  const buttonJabatan = () => {
    history.push('/jabatan') 
    window.location.reload();
  }
  const buttonDepartemen = () => {
    history.push('/departemen') 
    window.location.reload();
  }
  const buttonDashboard = () => {
    history.push('/') 
    window.location.reload();
  }

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
  
  return (
    <Fragment>
        <nav className="sidebar">
          <ul className="sidebar-nav">
            <li className="logo">
              <div className="sidebar-link">
                <span className="link-text logo-text">hrd-app</span>
                <img src={Logo} alt="" className="fa-secondary" />
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={buttonDashboard}>
                <img src={DashboardIC} alt="" className="fa-secondary" />
                  <p className="link-text">Dashboard</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={buttonKaryawan}>
                <img src={KaryawanIC} alt="" className="fa-secondary" />
                  <p className="link-text">Karyawan</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={buttonJabatan}>
                <img src={JabatanIC} alt="" className="fa-secondary" />
                  <p className="link-text">Jabatan</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={buttonDepartemen}>
                <img src={DepartemendIC} alt="" className="fa-secondary" />
                  <p className="link-text">Departemen</p>
              </div>
            </li>

            <li className="sidebar-item" id="themeButton">
              <div className="sidebar-link" onClick={logOut}>
                <img src={TentangIC} alt="" className="fa-secondary" />
                  <p className="link-text">Keluar</p>
              </div>
            </li>
          </ul>
        </nav>
    </Fragment>
    )
}

export default Sidebar


