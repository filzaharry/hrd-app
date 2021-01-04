import React, { Component } from "react";
import Table from "./Component";
import { connect } from "react-redux";
import { Gap } from "../../../components";
import { periodeAction } from "../../../config/actions/periode";


class TablePeriode extends Component {
  componentDidMount() {
    this.props.dispatch(periodeAction());
  }
  componentDidUpdate() {
    this.props.dispatch(periodeAction());
  }
  render() {
    return (
      <div className="mt-2">
        <h1>Data Periode</h1>
        <h5 className="text-muted">
          Setiap Periode bisa dilakukan penginputan maksimal 12 kali{" "}
          <span className="text-info">Detail</span>
        </h5>
        <Gap height={20} />
        <Table />
      </div>
    );
  }
}
export default connect()(TablePeriode);
