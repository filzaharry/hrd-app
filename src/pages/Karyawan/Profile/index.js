import React, { Fragment, useEffect } from "react";
import { Back, Gap } from "../../../components";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import { API } from "../../../config/utils/constants";
import About from "./About";
import Jobs from "./Jobs";
import moment from "moment";
import "./profile.scss";
import { setDetailKaryawan } from "../../../config/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";



const ProfileKaryawan = (props) => {
  const history = useHistory();
  const { dataKaryawan } = useSelector((state) => state.detailKaryawanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(setDetailKaryawan(id));
  });
  
  const departemen = dataKaryawan.departemenId;
  const jabatan = dataKaryawan.jabatanId;
  const periode = dataKaryawan.periodeId;
  if (departemen || jabatan) {
    // console.log("departemen", departemen.nama_dep)
    // console.log("jabatan", jabatan.nama_jab)
    return (
      <Fragment>
      <div className="container">
        <Back title="Kembali ke Karyawan" route="/karyawan/profile" onClick={()=> history.push('/karyawan')} />
        <div className="row">
          <div className="col-sm col-lg-3 img">

            <img
              src={`${API}${dataKaryawan.image}`}
              className="img-thumbnail profile-karyawan"
              alt="img-profile"
            />

          </div>
          <div className="col-sm col-lg-6">
            <h1>{dataKaryawan.name}</h1>
            {/* <h4 className="text-success">{`Periode ke : ${periode.length}`}</h4> */}

            {/* Kalo data kosong doi ERROR */}
            <h5>
              {jabatan.nama_jab} {departemen.nama_dep}
            </h5>
            {/* ___________________________ */}

            <p className="font-italic">APK{dataKaryawan.nik}</p>
            <div className="container">
              <div className="row">

              <button className="btn btn-primary" 
              onClick={() => history.push(`/karyawan/profile/${dataKaryawan._id}/print`)}><FontAwesomeIcon icon={faPrint}/> Cetak</button>

                <Gap width={5} />
                <button onClick={()=> history.push(`/karyawan/profile/${dataKaryawan._id}/periode`)}
                  className="btn btn-success"
                >
                 {`Total Periode Kontrak : ${periode.length}`}
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <About
            tempatLahir={dataKaryawan.tempatLahir}
            tglLahir={moment(dataKaryawan.tglLahir).format('LL')}
            gender={dataKaryawan.gender}
            agama={dataKaryawan.agama}
            alamat={dataKaryawan.alamat}
          />
          <Jobs
            nik={dataKaryawan.nik}
            tglMulai={moment(dataKaryawan.tglMulai).format('LL')}
            jabatanId={jabatan.nama_jab}
            departemenId={departemen.nama_dep}
          />
          <div className="col pt-4">
            <h5>Link Dokumen Pendukung</h5>
            <button
              className="btn btn-info"
              onClick={() => {
                window.location.href = `${dataKaryawan.porto}`;
                return null;
              }}
            >
              Portofolio
            </button>
            <button
              className="btn btn-info ml-2"
              onClick={() => {
                window.location.href = `${dataKaryawan.cv}`;
                return null;
              }}
            >
              CV
            </button>
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
