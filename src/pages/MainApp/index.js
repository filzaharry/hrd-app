import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Gap, Header, Sidebar } from "../../components";
import Jabatan from "../Jabatan";
import Karyawan from "../Karyawan";
import Departemen from "../Departemen";
import Dashboard from "../Dashboard";
import Messages from "../Messages";
import Notification from "../Notifications";
import UserSettings from "../UserSettings";
import './mainapp.css'



const MainApp = () => {
  const token = localStorage.getItem('token')
  if(!token){
    return <Redirect to="/landingpage" />
  }
  return (
    <div className="body">
      <Router>
        <Header />
        <Sidebar />
        <div className="main pt-4">
          <Switch>
            <Route path="/karyawan" component={Karyawan} />
            <Route path="/jabatan" component={Jabatan} />
            <Route path="/departemen" component={Departemen} />
            <Route path="/messages" component={Messages} />
            <Route path="/notifications" component={Notification} />
            <Route path="/user-settings" component={UserSettings} />
            <Route path="/" component={Dashboard} />
          </Switch>
          <Gap height={150} />
          <p className="text-muted text-center">
            © 2020 - 2021 Filza Harry • All rights reserved • Build from
            Tangerang
          </p>
        </div>
      </Router>
    </div>
  );
};

export default MainApp;
