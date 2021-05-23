import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Back, Gap, UploadImg } from "../../../components";
import { useHistory } from "react-router-dom";
import SelectDepartemen from "./SelectDepartemen";
import SelectJabatan from "./SelectJabatan";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImgPreview,
} from "../../../config/redux/action";


const CreateKaryawan = () => {
  const { form, imgPreview } = useSelector(
    (state) => state.createKaryawanReducer
  );
  const {
    name,
    nik,
    departemen,
    jabatan,
    cv,
    gender,
    tglLahir,
    tempatLahir,
    agama,
    tglMulai,
    porto,
    alamat,
  } = form;
  const dispatch = useDispatch();
  const history = useHistory();
  // const [error, setError] = useState("");

  const onSubmit = () => {
    postToAPI(form)
    
    // window.location.reload() ini malah balik lagi ke form create
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <form>
      <Back
        title="Kembali ke Karyawan"
        onClick={() => history.push("/karyawan")}
      />
      <h3>Tambah Karyawan Baru</h3>
      <p className="text-muted">
        Semua data Wajib diisi sebelum menekan tombol Simpan Data Karyawan
      </p>

      <Gap height={20} />
      {/* Upload */}
      <div className="form-group ">
        <label for="image">Upload Foto Karyawan</label>
        <UploadImg onChange={(e) => onImageUpload(e)} img={imgPreview} />
      </div>

      {/* Name */}
      <div className="form-group ">
        <label for="name">Nama Lengkap</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nama Lengkap Karyawan"
          onChange={(e) => dispatch(setForm("name", e.target.value))}
          value={name}
        />
      </div>

      {/* nik */}
      <div className="form-group ">
        <label for="nik">NIK</label>
        <input
          type="number"
          className="form-control"
          id="nik"
          placeholder="contoh : 111"
          onChange={(e) => dispatch(setForm("nik", e.target.value))}
          value={nik}
        />
      </div>

      {/* departemen */}
      <div className="form-group ">
        <label for="departemen">Departemen</label>
        <select
          id="departemen"
          className="form-control"
          value={departemen}
          onChange={(e) => dispatch(setForm("departemen", e.target.value))}
        >
          <option selected>Choose...</option>
          <SelectDepartemen />
        </select>
      </div>

      {/* jabatan */}
      <div className="form-group ">
        <label for="jabatan">Jabatan</label>
        <select
          id="jabatan"
          className="form-control"
          value={jabatan}
          onChange={(e) => dispatch(setForm("jabatan", e.target.value))}
        >
          <option selected>Choose...</option>
          <SelectJabatan />
        </select>
      </div>

      {/* tglMulai */}
      <div className="form-group ">
        <label for="tglMulai">Tanggal Mulai Bekerja</label>
        <input
          type="date"
          className="form-control"
          id="tglMulai"
          placeholder="Tanggal Mulai"
          onChange={(e) => dispatch(setForm("tglMulai", e.target.value))}
          value={tglMulai}
        />
      </div>

      {/* Upload CV n porto*/}
      <div className="form-group ">
        <label for="cv">Link CV</label>
        <input
          type="text"
          className="form-control"
          id="cv"
          placeholder="Link CV"
          onChange={(e) => dispatch(setForm("cv", e.target.value))}
          value={cv}
        />
      </div>

      <div className="form-group ">
        <label for="porto">Link Portofolio</label>
        <input
          type="text"
          className="form-control"
          id="porto"
          placeholder="Link Portofolio"
          onChange={(e) => dispatch(setForm("porto", e.target.value))}
          value={porto}
        />
      </div>

      {/* Gender */}
      <div className="form-group ">
        <label for="gender">Gender</label>
        <select
          id="gender"
          className="form-control"
          value={gender}
          onChange={(e) => dispatch(setForm("gender", e.target.value))}
        >
          <option selected>Choose...</option>
          <option>Pria</option>
          <option>Wanita</option>
        </select>
      </div>

      {/* Tgl Lahir */}
      <div className="form-group ">
        <label for="tglLahir">Tanggal Lahir</label>
        <input
          type="date"
          className="form-control"
          id="tglLahir"
          placeholder="Tanggal Lahir"
          onChange={(e) => dispatch(setForm("tglLahir", e.target.value))}
          value={tglLahir}
        />
      </div>

      {/* Tmpt lahir */}
      <div className="form-group ">
        <label for="tempatLahir">Tempat Lahir</label>
        <input
          type="text"
          className="form-control"
          id="tempatLahir"
          placeholder="Tempat Lahir"
          onChange={(e) => dispatch(setForm("tempatLahir", e.target.value))}
          value={tempatLahir}
        />
      </div>

      {/* agama */}
      <div className="form-group ">
        <label for="agama">Agama</label>
        <select
          id="agama"
          className="form-control"
          value={agama}
          onChange={(e) => dispatch(setForm("agama", e.target.value))}
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

      <div className="form-group">
        <label for="alamat">Alamat Karyawan</label>
        <input
          type="textarea"
          className="form-control"
          id="alamat"
          placeholder="Alamat Rumah Karyawan"
          onChange={(e) => dispatch(setForm("alamat", e.target.value))}
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

export default CreateKaryawan;
