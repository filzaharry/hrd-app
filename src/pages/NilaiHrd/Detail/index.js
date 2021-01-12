import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Gap, ModEdHRD } from '../../../components';
import moment from 'moment';
import ModalEditPeriode from '../Edit';
import swal from 'sweetalert';
import { API_URL } from '../../../config/utils/constants';
import ModalEditNilaiHRD from '../Edit';

const DetailNilaiHrd = (props) => {
    const history = useHistory()
    const [data, setData] = useState({});
    useEffect(() => {
      const id = props.match.params.id;
      // console.log(id);
      Axios.get(`${API_URL}nilaihrd/${id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }, [props]);
    // console.log(data);

    const handleRemove = () => {
        const id = props.match.params.id;
        swal({
          title: "Are you sure?",
          text: "Jika Nilai dihapus, maka seluruh data nilai terkait akan terhapus",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            // console.log(spvId);
          Axios.delete(`${API_URL}nilaihrd/${id}`)
            .then((res) => {
              setData(res.data.data);
            })
            .catch((err) => {
              console.log("err: ", err);
            });
            swal("Data Nilai telah di hapus!", {
              icon: "success",
            });
        //    history.push('/periode');
          } else {
            swal("Periksa kembali sebelum menghapus data");
          }
        });
      }
    
    return (
        <Fragment>
          <div className="container-fluid">
            <h3>Detail Nilai Hrd</h3>
            <h5>Menampilkan Rincian Nilai HRD selama 1 Bulan</h5>
            <Gap height={20} />
            <div className="col">
  
            {/* <CustomTable /> */}
  
  
            <Gap height={20} />
            <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Tanggal Input</th>
                  <th scope="col">Masuk Kerja</th>
                    <th scope="col">Setengah Hari</th>
                    <th scope="col">Izin</th>
                    <th scope="col">Sakit</th>
                    <th scope="col">Alpa</th>
                  <th scope="col">Nilai per Bulan</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{moment(data.updatedAt).format('LL')}</td>
                    <td>{data.masuk}</td>
                    <td>{data.setengahHari}</td>
                    <td>{data.izin}</td>
                    <td>{data.sakit}</td>
                    <td>{data.alpa}</td>
                    <td>{data.hasilAkhir}</td>
                    <td><ModalEditNilaiHRD />
                    <button className="btn btn-danger" onClick={handleRemove}> Hapus</button></td> 
                  </tr>
              </tbody>
            </table>
            </div>
            </div>
            </div>
        </Fragment>
      );
    }


export default DetailNilaiHrd
