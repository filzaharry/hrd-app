import React, { Fragment, useEffect, useState } from "react";
import { Back, Gap, ModalNilaiSpv } from "../../components";
import Axios from "axios";
import { API_URL } from "../../config/utils/constants";
import { Spinner } from "reactstrap";
import moment from 'moment';
import { useHistory, useParams } from "react-router-dom";

const NilaiSpv = (props) => {
  const history = useHistory();
  const { karyawanId } = useParams();
  // kalo objeknya 1 pake {} kalo objeknya banyak(array) pakenya []
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;

    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const spv = data.nilaiSpvId;
  // console.log(spv);

  return (
    <Fragment>
      {data ? (
        <div>
          <Back
            title="Kembali ke Periode"
            route="/karyawan/profile/periode/nilai-spv"
            onClick={() =>
              history.push(
                `/karyawan/profile/${karyawanId}/periode`
              )
            }
          />
          <h3>Daftar Nilai dari Supervisor</h3>
          <h5 className="text-muted">
            Selama Periode Kontrak Berlangsung Nilai akan terdata di sini
          </h5>
          <p>Singkatan Kategori Nilai :</p>
          <div className="container row">
            <div className=" col col-lg-3">
            <p>HK : Hasil Kerja</p>
            <p>KR : Keterampilan</p>
            <p>TJ : Tanggung Jawab</p>
            <p>KS : Kerjasama</p>
            <p>DS : Disiplin</p>
            </div>
            <div className=" col col-lg-3">
            <p>KI : Kerajinan</p>
            <p>KT : Ketelitian</p>
            <p>KJ : Kejujuran</p>
            <p>LY : Loyalitas</p>
	    <p>IN : Inisiatif</p>
            </div>
          </div>
          <Gap height={40} />
          <div className="row">
            <div className="col">
              <p className="btn btn-success">
                Nilai Total :{" "}
                {spv &&
                  spv
                    .map((nilaiSpv) => Math.trunc(nilaiSpv.hasilAkhir))
                    .reduce((a, b) => a + b, 0)}
              </p>
            </div>
          </div>

          {/*  */}

          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Tanggal Input</th>
                <th scope="col">HK</th>
                <th scope="col">KR</th>
                <th scope="col">TJ</th>
                <th scope="col">KS</th>
                <th scope="col">DS</th>
                <th scope="col">KI</th>
                <th scope="col">KT</th>
                <th scope="col">KJ</th>
                <th scope="col">LY</th>
		<th scope="col">IN</th>
                <th scope="col">Rekomendasi</th>
                <th scope="col">Total Nilai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {spv &&
                spv.map((nilaiSpv) => (
                <tr>
                  <td>{moment(nilaiSpv.updatedAt).subtract(10, "days").calendar()}</td>
                  <td>{nilaiSpv.hasilKerja}</td>
                  <td>{nilaiSpv.keterampilan}</td>
                  <td>{nilaiSpv.tanggungJawab}</td>
                  <td>{nilaiSpv.kerjasama}</td>
                  <td>{nilaiSpv.disiplin}</td>
                  <td>{nilaiSpv.kerajinan}</td>
                  <td>{nilaiSpv.ketelitian}</td>
                  <td>{nilaiSpv.kejujuran}</td>
                  <td>{nilaiSpv.loyalitas}</td>
		  <td>{nilaiSpv.inisiatif}</td>
                  <td>{nilaiSpv.rekomendasi}</td>
                  <td>{Math.trunc(nilaiSpv.hasilAkhir)}</td>
                  <td>
                    <ModalNilaiSpv 
                    value1={nilaiSpv.question1}
                    value2={nilaiSpv.question2}
                    value3={nilaiSpv.question3}
                    value4={nilaiSpv.question4}
                    />
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
