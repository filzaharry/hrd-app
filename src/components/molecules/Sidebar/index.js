import React, { Fragment } from 'react'
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
              <div className="sidebar-link" onClick={()=>history.push('/')}>
                <img src={DashboardIC} alt="" className="fa-secondary" />
                  <p className="link-text">Dashboard</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={()=>history.push('/karyawan') }>
                <img src={KaryawanIC} alt="" className="fa-secondary" />
                  <p className="link-text">Karyawan</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={()=>history.push('/jabatan')}>
                <img src={JabatanIC} alt="" className="fa-secondary" />
                  <p className="link-text">Jabatan</p>
              </div>
            </li>

            <li className="sidebar-item">
              <div className="sidebar-link" onClick={()=>history.push('/departemen')}>
                <img src={DepartemendIC} alt="" className="fa-secondary" />
                  <p className="link-text">Departemen</p>
              </div>
            </li>

            <li className="sidebar-item" id="themeButton">
              <div className="sidebar-link" onClick={()=>history.push('/landingpage')}>
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


