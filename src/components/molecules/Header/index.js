import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { MessageIC, NotifIC, UserIC } from "../../../assets";
import "./header.scss";

const Header = () => {
  const history = useHistory();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
      <Fragment>
        <div className="nav-wrapper">
          <div className="container header">
            <nav className="navbar navbar-expand-lg navbar-light bg-darken-1">
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`${
                  isNavCollapsed ? "collapse" : ""
                } navbar-collapse`}
              >
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Nama Karyawan"
                  />
                  <button
                    className="btn btn-outline-dark my-2 my-sm-0"
                    type="submit"
                  >
                    Cari
                  </button>
                </form>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" onClick={() => history.push("/messages")}>
                    <div className="nav-link">
                      <div to="/messages">
                      <img
                        src={MessageIC}
                        className="messIcon"
                        alt="navIconImg" 
                      />
                      </div>
                      <p className="titleIcon">Message</p>
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => history.push("/notifications")}
                  >
                    <div className="nav-link">
                      <img
                        src={NotifIC}
                        className="notifIcon"
                        alt="navIconImg"
                      />
                      <p>Notifications</p>
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => history.push("/user-settings")}
                  >
                    <div className="nav-link">
                      <img src={UserIC} className="userIcon" alt="navIconImg" />
                      <p>User Settings</p>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </Fragment>
  );
};

export default Header;
