import React, { useEffect } from "react";
import { CardImgHello, ImgCardDashboard } from "../../assets";
import { Gap } from "../../components";
import CardSmallDash2 from "./Card2";
import CardSmallDash from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setDataDepartemen, setDataJabatan, setDataKaryawan, setDataUser } from "../../config/redux/action";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Calendar from "./Calendar";

const Dashboard = (props) => {
  const { dataKaryawan } = useSelector((state) => state.karyawanReducer);
  const { dataJabatan } = useSelector((state) => state.jabatanReducer);
  const { dataDepartemen } = useSelector((state) => state.departemenReducer);
  const { dataUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataKaryawan());
    dispatch(setDataJabatan());
    dispatch(setDataDepartemen());
    dispatch(setDataUser());
  }, [dispatch]);  


  
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="pl-4 ml-4">
          <Gap height={20} />
          <h3 className="font-weight-bold text-dark">Selamat Datang</h3>
          <h5 className="text-primary">Administrator : {dataUser.namaLengkap}</h5>
          <Gap height={20} />
          <h5 className="text-secondary">Total Karyawan</h5>
          <CardSmallDash
            img={ImgCardDashboard}
            style={{ backgroundColor: "#23232e" }}
            jumlah={dataKaryawan.length}
            subtitle="Karyawan"
          />
          <Gap height={50} />
          <div className="col row">
            <div>
              <h5 className="text-secondary">Departemen</h5>
              <CardSmallDash2
                style={{ backgroundColor: "#518099" }}
                jumlah={dataDepartemen.length}
              />
            </div>
            <div>
              <h5 className="text-secondary">Jabatan</h5>
              <CardSmallDash2
                style={{ backgroundColor: "#ff8448" }}
                jumlah={dataJabatan.length}
              />
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{
            zIndex: "1",
            marginTop: "70px",
            marginRight: "60px",
            position: "absolute",
            opacity: "0.75"
          }}>

            <Calendar />
          </div>
          <img
            src={CardImgHello}
            alt="dashboard"
            style={{marginRight: "50px"}}
          />
        </div> 
        
        <div className="col-md-6">
        <LineChart pria={dataKaryawan.jenisKelamin} wanita={dataKaryawan.jenisKelamin} />
        
        </div>
        <div className="col-md-6">
        <BarChart pria={dataKaryawan.jenisKelamin} wanita={dataKaryawan.jenisKelamin} />
        </div>
        </div>
      </div>
  );
};

export default Dashboard;
