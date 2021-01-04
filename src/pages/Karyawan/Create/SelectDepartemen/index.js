import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { departemenAction } from "../../../../config/actions/departemen";

const mapStateToProps = (state) => {
  return {
    getDepartemenList: state.departemen.getDepartemenList,
    errorDepartemenList: state.departemen.errorDepartemenList,
  };
};
class SelectDepartemen extends Component {
  componentDidMount() {
    this.props.dispatch(departemenAction());
  }
  render() {
      const departemen = this.props.getDepartemenList.data;
      // console.log("data Input departemen:", this.props.getDepartemenList.data);
    return (
      <Fragment>
        {departemen &&
          departemen.map((getDepartemenList) => (
            <option value={getDepartemenList._id}>
              {getDepartemenList.nama_dep}
            </option>
          ))}
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(SelectDepartemen);
