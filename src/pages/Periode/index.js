import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Spinner } from "reactstrap";
import moment from "moment";
import { Gap } from "../../components";
import { faCheck, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalTambahPeriode from "./Create";
import { API_URL } from "../../config/utils/constants";

const ProfileKaryawan = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    // console.log(props);
    Axios.get(`${API_URL}karyawan/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  // const history = useHistory();
  const departemen = data.departemenId;
  const jabatan = data.jabatanId;
  const periode = data.periodeId;
  if (departemen || jabatan) {
    // console.log("departemen", departemen.nama_dep)
    // console.log("jabatan", jabatan.nama_jab)
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm col-lg-3">
            <img
              src={`http://localhost:4000/${data.image}`}
              className="img-thumbnail profile-karyawan"
              alt="img-profile"
            />
          </div>
          <div className="col-sm col-lg-6">
            <h1>{data.name}</h1>
            <h5>{jabatan.nama_jab} {departemen.nama_dep}</h5>
            <p className="font-italic">{data.nik}</p>
              <ModalTambahPeriode onClick={()=> history.push('/periode/tambah-periode')} />
          </div>
          <hr />
        <div className="container-fluid">
          <Gap height={20} />

          {/* <CustomTable /> */}


          <Gap height={20} />
          <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">Tanggal Mulai</th>
                <th scope="col">Tanggal Selesai</th>
                <th scope="col">Total Nilai</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {periode &&
            periode.map((getPeriodeList) => (

                <tr key={getPeriodeList._id}>
                  <td>{moment(getPeriodeList.tglMulai).format('LL')}</td>
                  <td>{moment(getPeriodeList.tglSelesai).format('LL')}</td>
                  {/* <td style={{cursor: "pointer"}} className="text-primary" onClick={()=> history.push(`/periode/${getPeriodeList.id}/nilaihrd`)}>Lihat Nilai</td>
                  <td style={{cursor: "pointer"}} className="text-primary" onClick={()=> history.push(`/periode/${getPeriodeList.id}/nilaispv`)}>Lihat Nilai</td> */}
                  <td>{getPeriodeList.totalNilai}</td>
                  <td className="text-info"><FontAwesomeIcon icon={faCheck} /> {getPeriodeList.status}</td>
                  <td><button className="btn btn-info mr-2" onClick={()=> history.push(`periode/${getPeriodeList._id}`)}><FontAwesomeIcon icon={faInfo} /> Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default ProfileKaryawan;
