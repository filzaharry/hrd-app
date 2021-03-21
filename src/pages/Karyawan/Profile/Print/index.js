import React, { Fragment, useEffect, useState } from 'react'
import { Spinner, Table } from 'reactstrap'
import { LogoPrint } from '../../../../assets'
import { Back, Gap } from '../../../../components'
import Pdf from "react-to-pdf";
import './print.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { API, API_URL } from '../../../../config/utils/constants';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


const ref = React.createRef();

const PrintKaryawan = (props) => {
    const history = useHistory();
    const [data, setData] = useState({});
    useEffect(() => {
      const id = props.match.params.id;
      // console.log(props);
      Axios.get(`${API_URL}karyawan/${id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }, [props]);

    const departemen = data.departemenId;
    const jabatan = data.jabatanId;
    if (departemen || jabatan) {
    return (
        <Fragment>
        <Back title="Kembali ke Profile Karyawan" onClick={()=> history.push(`/karyawan/profile/${data._id}`)} />
        <Pdf targetRef={ref} filename={`Karyawan_${data.name}`}>
        {({ toPdf }) => <p style={{float: "right"}} className="btn btn-primary" onClick={toPdf}><FontAwesomeIcon icon={faPrint}/> Cetak Dokumen</p>}
        </Pdf>
        <div className="body-print" ref={ref}>
            <page className="page" size="A4">
                <div className="pt-4">
                    <div className="row ">
                        <div className="col col-lg-2 text-right">
                            <img src={LogoPrint} alt="aplus-logo" style={{maxWidth: "100px"}}/>
                        </div>
                        <div className="col col-lg-10 text-center">  
                            <h2>PT. Aplus Pacific</h2>
                            <p>JL PRABU SILIWANGI KM 3, JATI UWUNG TANGGERANG, RT.004/RW.005 Pasir Jaya, Kec. Jatiuwung, Kota Tangerang, Banten 15135</p>
                            <p className="text-primary">http://aplus-hrd.netlify.app/</p>
                        </div>
                    </div>
                    <hr/>
                    <Gap height={30} />
                    <div className="section">
                        <div className="row">
                            <div className="col col-lg-6">
                                <img src={`${API}${data.image}`} className="mr-4 ml-auto img-thumbnail profile-karyawan" alt="img-profile" />
                            </div>
                            <div className="col col-lg-6">
                                    <h4>Informasi Karyawan</h4>
                                <div className="ml-4 mt-4">
                                    <p>Nama     : {data.name}</p>
                                    <p>NIK      : APK.{data.nik}</p>
                                    <p>Jabatan     : {jabatan.nama_jab}</p>
                                    <p>Depart.     : {departemen.nama_dep}</p>
                                    <p>Tgl Masuk     : {moment(data.tglMulai).format('LL')}</p>
                                </div>
                            </div>
                        </div>
                        <Gap height={20} />
                        <div className="col col-lg-10 mx-auto">
                                <h4>Informasi Karyawan</h4>
                                <hr/>
                            <div className="row mt-4">
                                <div className="col ml-4 ">
                                    <p>Tempat Lahir     : {data.tempatLahir}</p>
                                    <p>Tanggal Lahir      : {moment(data.tglLahir).format('LL')}</p>
                                    <p>Jenis Kelamin     : {data.gender}</p>
                                    <p>Agama     : {data.agama}</p>
                                    
                                </div>
                                <div className="col">
                                    
                                    <p>Curriculum Vitae     : {data.cv}</p>
                                    <p>Portofolio     : {data.porto}</p>
                                    <p>Alamat     : {data.alamat}</p>
                                </div>
                            </div>
                        </div>
                        <Gap height={50} />
                        <div className="col col-lg-10 mx-auto">
                            <h4>Riwayat Kontrak Kerja</h4>
                            <hr/>


                            <div className="row mt-4">
                                <div className="col">
                                    <p>Periode ke 1</p>
                                    <p>17 Januari 2021 s/d 17 Januari 2022</p>                                
                                </div>
                                <div className="col">
                                    <p>Total Nilai  : 80</p>
                                    <p>Status   : Kontrak Diperpanjang</p>
                                </div> 
                            </div>
                            <div>
                                <Table responsive striped size="md">
                                    <thead className="table-secondary">
                                        <tr>
                                        <th>Bulan</th>
                                        <th>Penilaian HRD</th>
                                        <th>Penilaian SPV</th>
                                        <th>Nilai Per Bulan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Januari</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>80</td>
                                        </tr>
                                        <tr>
                                        <td>Februari</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>80</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <Gap height={40} />
                            <p className="text-muted text-center">
                            • Copyright© 2020 - 2021 PT. Aplus Pacific • All rights reserved • 
                            </p>
                            <Gap height={40} />
                        </div>
                    </div>
                </div>
            </page>
            <page className="page" size="A4" layout="landscape"></page>
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

export default PrintKaryawan
