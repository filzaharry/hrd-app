import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableKaryawan from "./Table/Container";
import EditKaryawan from "./Edit/Container";
import CreateKaryawan from "./Create";
import ProfileKaryawan from "./Profile";
import PeriodeKaryawan from "../Periode";
import NilaiSpv from "../NilaiSpv";
import NilaiHrd from "../NilaiHrd";
import DetailPeriode from "../Periode/Detail";
import DetailNilaiHrd from "../NilaiHrd/Detail";

const Karyawan = () => {
  return (
    <Router>
        <div className="col pt-4">
          <Switch>
            {/* <Route path="/karyawan/profile/:id/periode/:id/nilaispv/:id" component={DetailNilaiSpv} /> */}
            <Route path="/karyawan/profile/:id/periode/:id/nilaispv" component={NilaiSpv} />

            <Route path="/karyawan/profile/:id/periode/:id/nilaihrd/:id" component={DetailNilaiHrd} />
            <Route path="/karyawan/profile/:id/periode/:id/nilaihrd" component={NilaiHrd} />

            <Route path="/karyawan/profile/:id/periode/:id/nilaihrd" component={NilaiHrd} />
            <Route path="/karyawan/profile/:id/periode/:id" component={DetailPeriode} />

            <Route path="/karyawan/tambah-karyawan" component={CreateKaryawan}/>
            <Route path="/karyawan/profile/:id/periode" component={PeriodeKaryawan} />
            <Route path="/karyawan/profile/:id" component={ProfileKaryawan} />
            <Route path="/karyawan/edit/:id" component={EditKaryawan} />
            <Route path="/karyawan"  component={TableKaryawan} />
          </Switch>
        </div>
    </Router>
  );
};

export default Karyawan;
