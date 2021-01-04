import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import "./register.scss";
import axios from "axios";
import addNotification from "react-push-notification";
import swal from "sweetalert";

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

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
      email: email,
      password: password,
    };
    // console.log(data);
    axios
      .post("http://localhost:4000/v1/register", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            // setAlert(result.data.message);
            // setTimeout(() => {
            //   setAlert("");
            // }, 3000);
            history.push("/");
            swal(
              "Berhasil !",
              result.data.message,
              "success"
            );
            addNotification({
              title: "Registrasi Berhasil !!!",
              message: result.data.message,
              icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
              theme: "darkblue",
              native: true,
              duration: 30000, // when using native, your OS will handle theming.
            });
          }
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="container-fluid register">
      <section className="row">
        <div className="col-6 text-center left">
          <img className="rounded" src={LoginBg} alt="register-hero-img" />
        </div>
        <div className="col right">
          {error && (
            <div className="alert alert-danger">
              <p>{error}</p>
            </div>
          )}
          <Gap height={10} />
          <h1 className="display-4">Register</h1>
          <h6 className="font-weight-lighter">
            Buat akun anda agar bisa masuk ke Sistem
          </h6>
          <Gap height={30} />
          <Input
            type="text"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={ChangeUsername}
          />
          <Gap height={10} />
          <Input
            type="email"
            label="Email"
            placeholder="example@gmail.com"
            value={email}
            onChange={ChangeEmail}
          />
          <Gap height={10} />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={ChangePassword}
          />
          <Gap height={30} />
          <Button title="Register" onClick={RegisterClick} />
          <Button
            className="btn btn-outline-secondary ml-3 text-light"
            title="Back to Login"
            onClick={() => history.push("/login")}
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
