import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { Gap } from "../../../components";
import { Link, useHistory } from "react-router-dom";
import SelectDepartemen from "./SelectDepartemen";
import SelectJabatan from "./SelectJabatan";
import Axios from "axios";
import swal from "sweetalert";
import addNotification from "react-push-notification";
import { API_URL } from "../../../config/utils/constants";

const CreateKaryawan = () => {
  const history = useHistory()
  const [image, setImage] = useState("");
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [cv, setCv] = useState("");
  const [gender, setGender] = useState("");
  const [tglLahir, setLahir] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [agama, setAgama] = useState("");
  const [tglMulai, setTglMulai] = useState("");
  const [porto, setPorto] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState("");

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const changeNama = (e) => {
    const value = e.target.value;
    setNama(value);
    setError("");
  };
  const changeNik = (e) => {
    const value = e.target.value;
    setNik(value);
    setError("");
  };
  const changeDepartemen = (e) => {
    const value = e.target.value;
    setDepartemen(value);
    setError("");
  };
  const changeJabatan = (e) => {
    const value = e.target.value;
    setJabatan(value);
    setError("");
  };
  const changePorto = (e) => {
    const value = e.target.value;
    setPorto(value);
    setError("");
  };
  const changeCv = (e) => {
    const value = e.target.value;
    setCv(value);
    setError("");
  };
  const changeGender = (e) => {
    const value = e.target.value;
    setGender(value);
    setError("");
  };
  const changeLahir = (e) => {
    const value = e.target.value;
    setLahir(value);
    setError("");
  };
  const changeTempatLahir = (e) => {
    const value = e.target.value;
    setTempatLahir(value);
    setError("");
  };

  const changeAgama = (e) => {
    const value = e.target.value;
    setAgama(value);
    setError("");
  };

  const changeTglMulai = (e) => {
    const value = e.target.value;
    setTglMulai(value);
    setError("");
  };
  const changeAlamat = (e) => {
    const value = e.target.value;
    setAlamat(value);
    setError("");
  };

  const changeImage = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    setImage(file);
  };

  const submitKaryawan = (e) => {
    swal("Berhasil Tambah Karyawan!", {
      icon: "success",
    });
    history.push("/karyawan");
    addNotification({
      title: "Berhasil Tambah Karyawan! !!!",
      icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
      theme: "darkblue",
      native: true,
      duration: 30000, // when using native, your OS will handle theming.
    });
    e.preventDefault();
    const data = {
      nama: nama,
      nik: nik,
      departemen: departemen,
      jabatan: jabatan,
      cv: cv,
      gender: gender,
      tglLahir: tglLahir,
      tempatLahir: tempatLahir,
      agama: agama,
      tglMulai: tglMulai,
      porto: porto,
      alamat: alamat,
    };
    formData.set("nama", data.nama);
    formData.set("nik", data.nik);
    formData.set("departemen", data.departemen);
    formData.set("jabatan", data.jabatan);
    formData.set("cv", data.cv);
    formData.set("gender", data.gender);
    formData.set("tglLahir", data.tglLahir);
    formData.set("tempatLahir", data.tempatLahir);
    formData.set("agama", data.agama);
    formData.set("tglMulai", data.tglMulai);
    formData.set("porto", data.porto);
    formData.set("alamat", data.alamat);
    formData.append("image", image);
    // console.log(formData);
    Axios.post(`${API_URL}karyawan`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("result", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <Link to="/karyawan" className="btn btn-info">
        <FontAwesomeIcon icon={faArrowLeft} />
        Kembali ke Karyawan
      </Link>
      <Gap height={20} />
      <h3>Tambah Karyawan Baru</h3>
      <Gap height={40} />
      {error && (
        <div className="alert alert-danger">
          <p>{error}</p>
        </div>
      )}

      <div className="form-row">
        {/* Upload */}
        <div className="form-group col-md-6">
          <label for="image">Upload Foto</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={changeImage}
          />
        </div>

        {/* Gender */}
        <div className="form-group col-md-6">
          <label for="gender">Gender</label>
          <select
            id="gender"
            className="form-control"
            value={gender}
            onChange={changeGender}
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
            onChange={changeNama}
            value={nama}
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
            onChange={changeLahir}
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
            onChange={changeNik}
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
            onChange={changeTempatLahir}
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
            onChange={changeDepartemen}
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
            onChange={changeAgama}
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
            onChange={changeJabatan}
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
            onChange={changeTglMulai}
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
            onChange={changeCv}
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
            onChange={changePorto}
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
          onChange={changeAlamat}
          value={alamat}
        />
      </div>
      <Gap height={20} />
      <div className="btn btn-primary" onClick={submitKaryawan}>
        <FontAwesomeIcon Icon={faSave} /> Simpan Data Karyawan
      </div>
    </form>
  );
};

export default CreateKaryawan;
