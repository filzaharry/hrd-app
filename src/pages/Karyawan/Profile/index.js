import React, { useEffect, useState } from "react";
import { Gap } from "../../../components";
import About from "./About";
import Jobs from "./Jobs";
import "./profile.scss";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Spinner } from "reactstrap";

const ProfileKaryawan = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    // console.log(props);
    Axios.get(`http://localhost:4000/v1/hrd/karyawan/${id}`)
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
  if (departemen || jabatan) {
    // console.log("departemen", departemen.nama_dep)
    // console.log("jabatan", jabatan.nama_jab)
    return (
      <div>
        <div className="row">
          <div className="col-sm col-lg-4">
            <img
              src={`http://localhost:4000/${data.image}`}
              className="img-thumbnail profile-karyawan"
              alt="img-profile"
            />
          </div>
          <div className="col-sm col-lg-8">
            <h1>{data.name}</h1>

            <h5>
              {jabatan.nama_jab} {departemen.nama_dep}
            </h5>

            <p className="font-italic">{data.nik}</p>
            <div className="container">
              <div className="row">
                <Link to="/karyawan/tambahkaryawan" className="btn btn-primary">
                  Cetak Profil
                </Link>
                <Gap width={5} />
                <Link
                  to={`/karyawan/profile/${data._id}/periode`}
                  className="btn btn-success"
                >
                  Lihat Kontrak
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <About
            tempatLahir={data.tempatLahir}
            tglLahir={data.tglLahir}
            gender={data.gender}
            agama={data.agama}
            alamat={data.alamat}
          />
          <Jobs
            nik={data.nik}
            tglMulai={data.tglMulai}
            jabatanId={jabatan.nama_jab}
            departemenId={departemen.nama_dep}
          />
          <div className="col pt-4">
            <h5>Dokumen Tersimpan</h5>
            <button
              className="btn btn-info mr-3"
              onClick={() => {
                window.location.href = `${data.porto}`;
                return null;
              }}
            >
              Portofolio
            </button>
            <button
              className="btn btn-info mr-3 mt-2"
              onClick={() => {
                window.location.href = `${data.cv}`;
                return null;
              }}
            >
              Curiculum Vitae
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center mt-4">
      <Spinner type="grow" variant="warning" />
    </div>
  );
};

export default ProfileKaryawan;
