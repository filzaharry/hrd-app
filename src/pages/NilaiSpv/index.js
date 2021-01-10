import {
  faArrowLeft,
  faCheck,
  faInfo,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { Gap, ModalNilaiSpv, ModEdHRD } from "../../components";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL_SPV } from "../../config/utils/constants";
import { Spinner } from "reactstrap";

const NilaiSpv = (props) => {
  // kalo objeknya 1 pake {} kalo objeknya banyak(array) pakenya []
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;

    Axios.get(`${API_URL_SPV}/periode/${id}/nilaispv`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  console.log(data);

  return (
    <Fragment>
      {data ? (
        <div className="mt-2">
          <Link to="/karyawan" className="btn btn-info">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> Kembali ke Karyawan
          </Link>
          <Gap height={20} />
          <h2>Daftar Nilai dari Supervisor</h2>
          <h5 className="text-muted">
            Selama Periode Kontrak Berlangsung Nilai akan terdata di sini
          </h5>
          <Gap height={20} />
          <div className="btn btn-primary">
            <ModEdHRD buttonLabel="Tambah Nilai" />
          </div>
          <Gap height={40} />

          {/*  */}

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tanggal Input</th>
                <th scope="col">Total Nilai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((spv) => (
                <tr>
                  <td>{spv.updatedAt}</td>
                  <td>{spv.totalNilai}</td>
                  <td>
                    <ModalNilaiSpv 
                    value1={spv.hasilKerja}
                    value2={spv.keterampilan}
                    value3={spv.tanggungJawab}
                    value4={spv.kerjasama}
                    value5={spv.disiplin}
                    value6={spv.kerajinan}
                    value7={spv.ketelitian}
                    value8={spv.kejujuran}
                    value9={spv.loyalitas}
                    value10={spv.rekomendasi}
                    value11={spv.question1}
                    value12={spv.question2}
                    value13={spv.question3}
                    value14={spv.question4}
                    ><FontAwesomeIcon icon={faInfo} /></ModalNilaiSpv>
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
export default NilaiSpv;
