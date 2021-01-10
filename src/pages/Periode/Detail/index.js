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

const DetailPeriode = (props) => {
    const history = useHistory()
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
          Axios.delete(`${API_URL}periode/${id}`)
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
          <div className="row">
            <div className="col-sm col-lg-3">
            </div>
            <div className="col-sm col-lg-6">
              {/* <p className="font-italic">{data.nik}</p> */}
                <ModEdHRD onClick={()=> history.push('/periode/tambah-periode')} />
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
                  <th scope="col">Nilai HRD</th>
                  <th scope="col">Nilai SPV</th>
                  <th scope="col">Total Nilai</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {/* {periode &&
              periode.map((getPeriodeList) => ( */}
  
                  <tr>
                    <td>{moment(data.tglMulai).format('LL')}</td>
                    <td>{moment(data.tglSelesai).format('LL')}</td>
                    <td style={{cursor: "pointer"}} className="text-primary"
                     onClick={()=> history.push(`${data._id}/nilaihrd`)}
                     >Lihat Nilai</td>
                    <td style={{cursor: "pointer"}} className="text-primary" onClick={()=> history.push(`${data._id}/nilaispv`)}>Lihat Nilai</td>
                    <td>{data.totalNilai}</td>
                    <td className="text-info"><FontAwesomeIcon icon={faCheck} /> {data.status}</td>
                    <td><ModalEditPeriode />
                    <button className="btn btn-danger" onClick={handleRemove}> Hapus</button></td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
            </div>
            </div>
            </div>
        </Fragment>
      );
    }


export default DetailPeriode
