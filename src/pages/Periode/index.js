import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import moment from "moment";
import { Back, Gap } from "../../components";
import { faInfo, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCreate from "./Create";
import { API, API_URL } from "../../config/utils/constants";
import { setDetailKaryawan } from "../../config/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import Axios from "axios";

const Periode = (props) => {
  const history = useHistory();
  const { dataKaryawan } = useSelector((state) => state.detailKaryawanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(setDetailKaryawan(id));
  }, [dispatch, props]);

  const submitHapus = (_id) => {
    // console.log(_id);
    confirmAlert({
      title: "Confirm to Delete",
      message: "Apakah Anda yakin akan menghapus Data Jabatan ini ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            Axios.delete(`${API_URL}periode/${_id}`)
              .then((res) => {
                console.log("berhasil menghapus Jabatan", res.data);
                window.location.reload();
              })
              .catch((err) => {
                console.log("gagal hapus", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("User Tidak Setuju"),
        },
      ],
    });
  }

 
  
  const departemen = dataKaryawan.departemenId;
  const jabatan = dataKaryawan.jabatanId;
  const periode = dataKaryawan.periodeId;
  if (departemen || jabatan) {
    // console.log("departemen", departemen.nama_dep)
    // console.log("jabatan", jabatan.nama_jab)
    return (
      <Fragment>
        <div className="container">
        <Back
          route={`/karyawan/profile/${dataKaryawan.name}/periode`}
          title="Kembali ke Profil"
          onClick={() => history.push(`/karyawan/profile/${dataKaryawan._id}`)}
        />
        <div className="row">
          <div className="col-sm col-lg-3">
            <img
              src={`${API}${dataKaryawan.image}`}
              className="img-thumbnail profile-karyawan"
              alt="img-profile"
            />
          </div>
          <div className="col-sm col-lg-6">
            <h1>{dataKaryawan.name}</h1>
            <h5>{jabatan.nama_jab} {departemen.nama_dep}</h5>
            <p className="font-italic">APK{dataKaryawan.nik}</p>
            <ModalCreate />
          </div>
          <hr />
          <div className="container-fluid">
            <Gap height={40} />

            {/* <CustomTable /> */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Periode Ke-</th>
                    <th scope="col">Tanggal Mulai</th>
                    <th scope="col">Tanggal Selesai</th>
                    <th scope="col">Nilai HRD</th>
                    <th scope="col">Nilai SPV</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {periode.map((periodList) => (
                    <tr key={periodList._id}>
                      <td><FontAwesomeIcon icon={faList}/> {periodList.periodeKe}</td>
                      <td>{moment(periodList.tglMulai).format("LL")}</td>
                      <td>{moment(periodList.tglSelesai).format("LL")}</td>
                      <td style={{cursor: "pointer"}} className="text-info" onClick={()=> history.push(`periode/${periodList._id}/nilaihrd`)}>Lihat Nilai</td>
                      <td style={{cursor: "pointer"}} className="text-info" onClick={()=> history.push(`periode/${periodList._id}/nilaispv`)}>Lihat Nilai</td>
                      <td>
                        <p className="btn btn-info mr-2" onClick={() => history.push(`periode/${periodList._id}`)}>
                          <FontAwesomeIcon icon={faInfo} />
                          </p>
                        <p className="btn btn-danger mr-2" onClick={() => submitHapus(periodList._id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </Fragment>
    );
  }
  return (
    <div className="text-center mt-4">
      <Spinner type="grow" variant="warning" />
    </div>
  );
};

export default Periode;
