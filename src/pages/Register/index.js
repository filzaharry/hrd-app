import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import "./register.scss";
import axios from "axios";
import addNotification from "react-push-notification";
import swal from "sweetalert";
import SelectDepartemen from "./SelectDepartemen"
import SelectJabatan from "./SelectJabatan"
import { LOCAL } from "../../config/utils/constants";
import { Toggle } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");
  const [PasswordInputType, ToggleIcon] = Toggle();
  // const notify = () => toast(error);

  const ChangeNamaLengkap = (e) => {
    const value = e.target.value;
    setNamaLengkap(value);
    setError("");
  };
  const ChangeJabatan = (e) => {
    const value = e.target.value;
    setJabatan(value);
    setError("");
  };
  const ChangeDepartemen = (e) => {
    const value = e.target.value;
    setDepartemen(value);
    setError("");
  };
  const ChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };
  const ChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };
  const ChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const RegisterClick = () => {
    const data = {
      username: username,
      namaLengkap: namaLengkap,
      departemen: departemen,
      jabatan: jabatan,
      email: email,
      password: password,
    };
    axios
      .post(`${LOCAL}v1/register`, data)
      .then((result) => {
        if (result) {
          if (result.data) {
            history.push("/login");
            swal(
              "Berhasil !",
              result.data.message,
              "success"
            );
            addNotification({
              title: "Registrasi Berhasil !!!",
              message: result.data.message,
              theme: "darkblue",
              native: true,
              duration: 30000,
            });
            setNamaLengkap("");
            setDepartemen("");
            setJabatan("");
            setUsername("");
            setEmail("");
            setPassword("");
            setAlert(result.data.message);
            console.log(result.data);
            // setTimeout(() => {
            //   setAlert("");
            // }, 1000);
            
          }
        }
      })
      .catch((error) => {
        toast(error.response.data.message)
        setError(error.response.data.message);
      });
  };

  return (
    <div className="register text-light">
      <section className="row">
        <div className="col-6 text-center left">
          <img className="rounded" src={LoginBg} alt="register-hero-img" />
        </div>
        <div className="col right">
          {error && (
            <div>
            <ToastContainer />
            </div>
          )}
          <h1 className="display-4">Registrasi</h1>
          
          <Input
            type="text"
            label="Nama Lengkap"
            placeholder="Nama Lengkap"
            value={namaLengkap}
            onChange={ChangeNamaLengkap}
          />
          <Gap height={10} />


          <p className="text-danger">*Departemen dan Jabatan wajib diisi</p>
          <div class="form-row">
            <div class="form-group col">
            <label for="jabatan">Jabatan</label>
              <select
                id="jabatan"  
                className="form-control"
                value={jabatan}
                onChange={ChangeJabatan}
              >
                <option selected>Choose...</option>
                <SelectJabatan />
              </select>
            </div>
            <div class="form-group col">
            <label for="departemen">Departemen</label>
              <select
                id="departemen"
                className="form-control"
                value={departemen}
                onChange={ChangeDepartemen}
              >
                <option selected>Choose...</option>
                <SelectDepartemen />
              </select>
            </div>
          </div>

          <Gap height={10} />
          <div class="form-row">
            <div class="form-group col">
            <Input
            type="text"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={ChangeUsername}
          />
            </div>
            <div class="form-group col">
            <Input
            type="email"
            label="Email"
            placeholder="example@gmail.com"
            value={email}
            onChange={ChangeEmail}
          />
            </div>
          </div>
          <Gap height={10} />
          <Input
            type={PasswordInputType}
            label="Password"
            placeholder="Password"
            value={password}
            onChange={ChangePassword}
          />
          <span className="password-toggle-icon text-dark" style={{marginLeft: "500px"}}>{ToggleIcon}</span>
          <Gap height={30} />
          <Button title="Register" onClick={RegisterClick} />
          <Button
            className="btn btn-outline-secondary ml-3 text-light"
            title="Kembali ke Login"
            onClick={() => history.push("/login")}
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
