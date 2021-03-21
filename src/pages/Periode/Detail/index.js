import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Back, Gap } from "../../../components";
import moment from "moment";
import ModalEditPeriode from "../Edit";
import { API_URL } from "../../../config/utils/constants";
import { DetailBg, Diperpanjang, TidakDiperpanjang } from "../../../assets";
import "./detailperiode.scss";

const DetailPeriode = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    // console.log(id);
    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);
  // console.log(data);

  const hrd = data.nilaiHrdId;
  // console.log("nilai hrd woy", hrd);
  const spv = data.nilaiSpvId;
  // console.log("nilai hrd woy", spv);

  const totalhrd =
    hrd && hrd.map((nilaiHrd) => nilaiHrd.hasilAkhir).reduce((a, b) => a + b, 0);

  const totalspv =
    spv && spv.map((nilaiSpv) => Math.trunc(nilaiSpv.hasilAkhir))
      .reduce((a, b) => a + b, 0);

  const total = (totalhrd + totalspv) / 2;

  
  const { karyawanId } = useParams()

  return (
    <Fragment>
    <Back title="Kembali ke Periode" 
          route={`/karyawan/profile/periode/periode-ke-${data.periodeKe}`} 
          onClick={()=> history.push(`/karyawan/profile/${karyawanId}/periode`)}
    />
    <div className="container">


      <h3>Detail Periode Ke {data.periodeKe}</h3>
      <h5 className="text-secondary">Menampilkan secara detail data Periode</h5>


        <div className="col-lg-12">
          <Gap height={20} />
          <div className="row">
            <div className="col-lg-2 col ">
              <p>Mulai</p>
              <p>Selesai</p>
              <p>Nilai HRD</p>
              <p>Nilai SPV</p>
              <p>Total Nilai</p>
            </div>
            
            <div className="col-lg-1 col ">
              <p> :</p>
              <p> :</p>
              <p> :</p>
              <p> :</p>
              <p> :</p>
            </div>
            
            <div className="col-lg-4 col">
              <p>{moment(data.tglMulai).format("LL")}</p>
              <p>{moment(data.tglSelesai).format("LL")}</p>

              <p style={{ cursor: "pointer", padding: "2px 5px", marginTop: "-5px"}} className="btn btn-secondary"
                onClick={() => history.push(`${data._id}/nilaihrd`)}
              >
                {hrd &&
                  hrd
                    .map((nilaiHrd) => nilaiHrd.hasilAkhir)
                    .reduce((a, b) => a + b, 0)} 
              </p>
              <br />
              <p
                style={{
                  cursor: "pointer",
                  padding: "2px 5px",
                  marginTop: "-5px",
                }}
                className="btn btn-secondary"
                onClick={() => history.push(`${data._id}/nilaispv`)}
              >
                {spv &&
                  spv
                    .map((nilaiSpv) => Math.trunc(nilaiSpv.hasilAkhir))
                    .reduce((a, b) => a + b, 0)} 
              </p>
              <br />
              <p
                style={{
                  padding: "2px 5px",
                  marginTop: "-5px",
                }}
                className="btn btn-info disabled"
              >
                {total}
              </p>
              <Gap height={10} />
            <ModalEditPeriode />
            </div>
            <div className="col-lg-4">
              { total <= 30 ? (
                <img className="detail-bg" src={Diperpanjang} alt="detail-bg" />
              ) : (
                <img className="detail-bg" src={TidakDiperpanjang} alt="detail-bg" />
              )}
              </div>
          </div>
          <Gap height={20} />
          
        </div>
    </div>
    </Fragment>
  );
};

export default DetailPeriode;
