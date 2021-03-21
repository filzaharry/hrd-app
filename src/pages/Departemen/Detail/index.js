import React, { Fragment, useEffect, useState } from "react";
import { Spinner, Button } from "reactstrap";
import "./detail.scss";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { API, API_URL } from "../../../config/utils/constants";
import moment from 'moment';
import { Back } from "../../../components";

const DetailDepartemen = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`${API_URL}departemen/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const karyawan = data.karyawanId;
  // if (karyawan) {
    console.log([data.karyawanId]);
  // }
  return (
    <div>
      {karyawan ? (
        <Fragment>
          <Back title="Kembali ke Departemen" onClick={()=> history.push('/departemen')} route="/departemen/detail" />
          <div className="col">
            <img
              src={`${API}${data.image}`}
              className="img-thumbnail detail-departemen"
              alt="img-profile"
            />
            <div className="ml-2">
              <h2 style={{fontWeight: "bold"}}>{data.nama_dep}</h2>
              <div className="row">
                <div className="col-lg-6">
                  <h5 className="text-muted font-small">Kategori : {data.kategori}</h5>
                  <p className="text-success">Supervisor : {data.supervisor}</p>
                </div>
                <div className="col-lg-6">
                  <p className="text-muted font-small text-right">
                  Dibentuk : {moment(data.createdAt).format('LL')}
                  <br/>
                  Diubah : {moment(data.updatedAt).format('LL')}
                  </p>
                </div>
              </div>
              
              <hr />

              <table className="table mt-4 shadow p-3 mb-5 bg-white rounded">
                <thead className="thead-dark">
                  <tr className="text-primary">
                    <th></th>
                    <th scope="col">Nama Karyawan</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Tanggal Mulai Bekerja</th>
                  </tr>
                </thead>
                <tbody>
                  {data.karyawanId.map((karyawan) => (
                    <tr>
                      <td></td>
                      <td>{karyawan.name}</td>
                      <td>APK. {karyawan.nik}</td>
                      <td>{moment(karyawan.tglMulai).format('LL')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
      {/* <Switch>
        <Route path={`${path}/nilai`}>
          <TableNilai />
        </Route>
      </Switch> */}
    </div>
  );
};

export default DetailDepartemen;
