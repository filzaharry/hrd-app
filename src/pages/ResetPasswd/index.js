import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import axios from "axios";

const ResetPassword = (props) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setErrorPassword("Password Tidak Boleh Kosong");
    } else {
      setErrorPassword("");
    }
  };

  const changeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!value) {
      setErrorConfirmPassword("Konfirmasi Password Tidak Boleh Kosong");
    } else if (password !== value) {
      setErrorConfirmPassword("Password Tidak Sesuai");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const updatePassword = () => {
    const data = {
      password: password,
      token: props.match.params.token,
    };
    //   console.log(props.match.params.token);
    axios.put("http://localhost:4000/v1/resetpassword", data).then((res) => {
      // console.log(res);
      if (res) {
        setPassword("");
        setConfirmPassword("");
        setAlert("Password Berhasil diUbah");
        setTimeout(() => {
            setAlert('')
        }, 3000);
      }
    });
  };

  return (
    <Fragment>
      <div className="container-fluid login">
        <div className="row">
          <div className="col-sm col-lg-6 text-center left">
            <img className="rounded" src={LoginBg} alt="login-hero-img" />
          </div>
          <div className="col-sm col-lg-6 right">
            {alert && (
              <div className="alert alert-success">
                <p>{alert}</p>
              </div>
            )}
            <h1 className="display-4">Reset Password</h1>
            <Gap height={20} />
            <Input
              type="password"
              label="Password Baru"
              placeholder="Masukkan Password Baru"
              value={password}
              onChange={changePassword}
            />
            {errorPassword && (
              <p className="mt-2 text-danger">{errorPassword}</p>
            )}
            <Gap height={20} />
            <Input
              type="password"
              label="Ulangi Password"
              placeholder="Ulangi Password Baru"
              value={confirmPassword}
              onChange={changeConfirmPassword}
            />
            {errorConfirmPassword && (
              <p className="mt-2 text-danger">{errorConfirmPassword}</p>
            )}
            <Gap height={20} />
            <div className="row btn-click">
              <Button title="Simpan" onClick={updatePassword} />
              <Gap width={20} />
              <Button
                className="btn btn-outline-secondary text-light"
                title="Kembali ke Login"
                onClick={() => history.push("/login")}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
