import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { jabatanAction } from "../../../../config/actions/jabatan";

const mapStateToProps = (state) => {
  return {
    getJabatanList: state.jabatan.getJabatanList,
    errorJabatanList: state.jabatan.errorJabatanList,
  };
};
class SelectJabatan extends Component {
  componentDidMount() {
    this.props.dispatch(jabatanAction());
  }
  render() {
      const jabatan = this.props.getJabatanList.data;
      // console.log("data Input jabatan:", this.props.getJabatanList.data);
    return (
      <Fragment>
        {jabatan &&
          jabatan.map((getJabatanList) => (
            <option value={getJabatanList._id}>
              {getJabatanList.nama_jab}
            </option>
          ))}
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(SelectJabatan);
