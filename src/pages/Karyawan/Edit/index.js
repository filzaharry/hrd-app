import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { Gap, UploadImg } from "../../../components";
import { Link, useHistory, withRouter } from "react-router-dom";
import SelectDepartemen from "./SelectDepartemen";
import SelectJabatan from "./SelectJabatan";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setImgPreview, updateToAPI } from "../../../config/redux/action";
import Axios from "axios";
import { API, API_URL } from "../../../config/utils/constants";

const EditKaryawan = (props) => {
  const {form, imgPreview} = useSelector(state => state.createKaryawanReducer);
  const {name, nik, departemen, jabatan,cv, gender, tglLahir, tempatLahir, agama, tglMulai, porto, alamat} = form;
  const dispatch = useDispatch();
  const history = useHistory()
  // const [error, setError] = useState("");

  useEffect(()=> {
    // console.log('params:', props)
    const id = props.match.params.id;
    Axios.get(`${API_URL}karyawan/${id}`)
    .then( res => {
      const data = res.data.data;
      console.log('res', data);
      dispatch(setForm('name', data.name))
      dispatch(setImgPreview(`${API}${data.image}`))
      dispatch(setForm('nik', data.nik))
      dispatch(setForm('departemen', data.departemen))
      dispatch(setForm('jabatan', data.jabatan))
      dispatch(setForm('cv', data.cv))
      dispatch(setForm('gender', data.gender))
      dispatch(setForm('tglLahir', data.tglLahir))
      dispatch(setForm('tempatLahir', data.tempatLahir))
      dispatch(setForm('agama', data.agama))
      dispatch(setForm('tglMulai', data.tglMulai))
      dispatch(setForm('porto', data.porto))
      dispatch(setForm('alamat', data.alamat))
    })
    .catch( err => {
      console.log('err', err);
    })
  }, [dispatch, props])


  const onSubmit = () => {
    const id = props.match.params.id
    updateToAPI(form, id)
    // belom auto reload
    history.push('/karyawan')
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }

  return (
    <form>
      <Link to="/karyawan" className="btn btn-info">
        <FontAwesomeIcon icon={faArrowLeft} />
        Kembali ke Karyawan
      </Link>
      <Gap height={20} />
      <h3>Ubah Data Karyawan</h3>
      <p className="text-danger">Hati-Hati dalam melakukan perubahan data Karyawan</p>
      <p className="text-muted">Semua data Wajib diisi sebelum menekan tombol Simpan Data Karyawan</p>
      <Gap height={40} />
      {/* {error && (
        <div className="alert alert-danger">
          <p>{error}</p>
        </div>
      )} */}

      <div className="form-row">
        {/* Upload */}
        <div className="form-group col-md-6">
          <UploadImg onChange={(e)=> onImageUpload(e)} img={imgPreview} />
        </div>

        {/* Gender */}
        <div className="form-group col-md-6">
          <label for="gender">Gender</label>
          <select
            id="gender"
            className="form-control"
            value={gender}
            onChange={(e)=> dispatch(setForm('gender', e.target.value))}
          >
            <option selected>Choose...</option>
            <option>Pria</option>
            <option>Wanita</option>
          </select>
        </div>

        {/* Name */}
        <div className="form-group col-md-6">
          <label for="name">Nama Lengkap</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nama Lengkap Karyawan"
            onChange={(e)=> dispatch(setForm('name', e.target.value))}
            value={name}
          />
        </div>

        {/* Tgl Lahir */}
        <div className="form-group col-md-6">
          <label for="tglLahir">Tanggal Lahir</label>
          <input
            type="date"
            className="form-control"
            id="tglLahir"
            placeholder="Tanggal Lahir"
            onChange={(e)=> dispatch(setForm('tglLahir', e.target.value))}
            value={tglLahir}
          />
        </div>

        {/* nik */}
        <div className="form-group col-md-6">
          <label for="nik">NIK</label>
          <input
            type="number"
            className="form-control"
            id="nik"
            placeholder="contoh : 111"
            onChange={(e)=> dispatch(setForm('nik', e.target.value))}
            value={nik}
          />
        </div>

        {/* Tmpt lahir */}
        <div className="form-group col-md-6">
          <label for="tempatLahir">Tempat Lahir</label>
          <input
            type="text"
            className="form-control"
            id="tempatLahir"
            placeholder="Tempat Lahir"
            onChange={(e)=> dispatch(setForm('tempatLahir', e.target.value))}
            value={tempatLahir}
          />
        </div>

        {/* departemen */}
        <div className="form-group col-md-6">
          <label for="departemen">Departemen</label>
          <select
            id="departemen"
            className="form-control"
            value={departemen}
            onChange={(e)=> dispatch(setForm('departemen', e.target.value))}
          >
            <option selected>Choose...</option>
            <SelectDepartemen />
          </select>
        </div>

        {/* agama */}
        <div className="form-group col-md-6">
          <label for="agama">Agama</label>
          <select
            id="agama"
            className="form-control"
            value={agama}
            onChange={(e)=> dispatch(setForm('agama', e.target.value))}
          >
            <option selected>Choose...</option>
            <option>Islam</option>
            <option>Kristen Protestan</option>
            <option>Kristen Katholik</option>
            <option>Hindu</option>
            <option>Buddha</option>
            <option>Lainnya</option>
          </select>
        </div>

        {/* jabatan */}
        <div className="form-group col-md-6">
          <label for="jabatan">Jabatan</label>
          <select
            id="jabatan"
            className="form-control"
            value={jabatan}
            onChange={(e)=> dispatch(setForm('jabatan', e.target.value))}
          >
            <option selected>Choose...</option>
            <SelectJabatan />
          </select>
        </div>

        {/* Upload */}
        <div className="form-group col-md-6">
          <label for="tglMulai">Tanggal Mulai Bekerja</label>
          <input
            type="date"
            className="form-control"
            id="tglMulai"
            placeholder="Tanggal Mulai"
            onChange={(e)=> dispatch(setForm('tglMulai', e.target.value))}
            value={tglMulai}
          />
        </div>

        {/* Upload */}
        <div className="form-group col-md-6">
          <label for="cv">Upload CV</label>
          <input
            type="text"
            className="form-control"
            id="cv"
            placeholder="Link CV"
            onChange={(e)=> dispatch(setForm('cv', e.target.value))}
            value={cv}
          />
        </div>

        <div className="form-group col-md-6">
          <label for="porto">Upload Portofolio</label>
          <input
            type="text"
            className="form-control"
            id="porto"
            placeholder="Link Portofolio"
            onChange={(e)=> dispatch(setForm('porto', e.target.value))}
            value={porto}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="alamat">Alamat Karyawan</label>
        <input
          type="textarea"
          className="form-control"
          id="alamat"
          placeholder="Alamat Rumah Karyawan"
          onChange={(e)=> dispatch(setForm('alamat', e.target.value))}
          value={alamat}
        />
      </div>
      <Gap height={20} />
      <div className="btn btn-primary" onClick={onSubmit}>
        <FontAwesomeIcon Icon={faSave} /> Simpan Data Karyawan
      </div>
    </form>
  );
};

export default withRouter(EditKaryawan);
