import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gap } from "../../components";
import { connect } from "react-redux";
import TambahDepartemen from './Create'
import DetailDepartemen from "./Detail";
import ProfileKaryawan from "../Karyawan/Profile";
import DepartemenCard from "./Card";
import EditDepartemen from "./Edit";

class Departemen extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Gap height={30} />
          <Switch>
            <Route path="/departemen/:id/karyawan/profile/:id" component={ProfileKaryawan} />
            <Route path="/departemen/edit-departemen/:id"  component={EditDepartemen} />
            <Route path="/departemen/tambah-departemen" component={TambahDepartemen} />
            <Route path="/departemen/:id"  component={DetailDepartemen} />
            <Route path="/departemen" component={DepartemenCard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(Departemen);
