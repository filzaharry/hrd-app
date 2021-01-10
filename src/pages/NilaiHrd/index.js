import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { Gap } from "../../components";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../config/utils/constants";
import { Spinner } from "reactstrap";
import moment from 'moment'
import ModalTambahNilaiHRD from "./Create";
import ModalEditNilaiHRD from "./Edit";

const NilaiHrd = (props) => {
  // kalo objeknya 1 pake {} kalo objeknya banyak(array) pakenya []
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
  // console.log(id);
    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const hrd = data.nilaiHrdId
  // console.log(hrd);

  const edit = value => {
    console.log(value);
  }
  

  return (
    <Fragment>
      {data ? (
        <div className="mt-2">
          <Link to="/karyawan" className="btn btn-info">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> Kembali ke Karyawan
          </Link>
          <Gap height={20} />
          <h2>Daftar Nilai dari Departemen HRD</h2>
          <h5 className="text-muted">
            {data.tglMulai}
          </h5>
          <Gap height={20} />
          <div className="btn btn-primary">
            <ModalTambahNilaiHRD  buttonLabel="Tambah Nilai" />
          </div>
          <Gap height={40} />

          {/*  */}

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tanggal Input</th>
                <th scope="col">Nilai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {hrd && hrd.map((nilaiHrd) => (
                  <tr>
                    <td>{moment(nilaiHrd.updatedAt).format('LL')}</td>

                    <td>{nilaiHrd.hasilAkhir}</td>
                    <td> 
                      <button className="btn btn-info" onClick={()=> history.push(`nilaihrd/${nilaiHrd._id}`)}>Lihat Detail Nilai</button>
                    </td>
                  </tr>
                ))} 
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-4">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </Fragment>
  );
};

export default NilaiHrd;
