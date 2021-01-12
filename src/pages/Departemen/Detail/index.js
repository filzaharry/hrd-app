import React, { Fragment, useEffect, useState } from "react";
import { Spinner, Button } from "reactstrap";
import "./detail.scss";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../../config/utils/constants";

const DetailDepartemen = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`${API_URL}/departemen/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const karyawan = data.karyawanId;
  if (karyawan) {
    console.log([data.karyawanId]);
  }
  return (
    <div>
      {karyawan ? (
        <Fragment>
          {" "}
          <div className="col">
            <img
              src={`http://localhost:4000/${data.image}`}
              className="img-thumbnail detail-departemen"
              alt="img-profile"
            />
            <div className="ml-2">
              <h1 className="display-4">Departemen : {data.nama_dep}</h1>
              <h4 className="text-muted font-small">
                Kategori :{data.kategori}
              </h4>
              <h4 className="text-muted font-small">
                Supervisor :{data.supervisor}
              </h4>
              <hr />

              <table className="table mt-4 shadow p-3 mb-5 bg-white rounded">
                <thead>
                  <tr className="text-primary">
                    <th scope="col">Nama Karyawan</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Tanggal Mulai Bekerja</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.karyawanId.map((karyawan) => (
                    <tr>
                      <td>{karyawan.name}</td>
                      <td>{karyawan.nik}</td>
                      <td>{karyawan.tglMulai}</td>
                      <td>
                        <Link to="edit">
                          <Button color="info" className="mr-2">
                            <FontAwesomeIcon icon={faInfo} /> Lihat Profil
                          </Button>
                        </Link>
                      </td>
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
