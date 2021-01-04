import React, { Component } from "react";
import Table from "./Component";
import { connect } from "react-redux";
import { karyawanAction } from "../../../config/actions/karyawan";
import { Gap } from "../../../components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

class TableKaryawan extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanAction());
  }
  componentDidUpdate() {
    this.props.dispatch(karyawanAction());
  }
  render() {
    return (
      <div className="mt-2">
        <h1>Data Karyawan</h1>
        <h5 className="text-muted">
          Untuk melihat profile masing-masing karyawan klik action{" "}
          <span className="text-info">Detail</span>
        </h5>
        <Gap height={20} />
        <Link to={"/karyawan/tambah-karyawan"}>
          <button color="dark" className="btn btn-primary mr-2">
            <FontAwesomeIcon icon={faUserPlus} /> Tambah Karyawan
          </button>
        </Link>
        <Gap height={20} />
        <Table />
      </div>
    );
  }
}
export default connect()(TableKaryawan);
