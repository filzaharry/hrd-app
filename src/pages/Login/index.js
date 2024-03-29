import React, { Fragment, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import "./login.scss";
import axios from "axios";
import addNotification from "react-push-notification";
import swal from "sweetalert";
import { LOCAL } from "../../config/utils/constants";
import { Toggle } from "../../components";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const [PasswordInputType, ToggleIcon] = Toggle();

  const ChangeUsername = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setUsername(value);
    setError("");
  };
  const ChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };
    axios
      .post(`${LOCAL}v1/login`, data)
      .then((result) => {
        if (result) {
          
          localStorage.setItem("user",  JSON.stringify(result.data.dataUser));
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
          swal("Selamat Datang !", result.data.message, "success");
          addNotification({
            title: "Selamat Datang Kembali !!!",
            message: result.data.message,
            theme: "darkblue",
            native: true,
            duration: 30000,
          });
          
        }
      })
      .catch((error) => {
        toast(error.response.data.message)
        setError(error.response.data.message);
      });
  };

  return (
    <Fragment>
      {redirect && <Redirect to="/" />}
      <div className="container-fluid login">
        <div className="row">
          <div className="col-sm col-lg-6 text-center left">
            <img className="rounded" src={LoginBg} alt="login-hero-img" />
          </div>
          <div className="col-sm col-lg-6 right">
        {error && (
          <div>
            <ToastContainer/>
          </div>
        )}
            <h1 className="display-4">Login</h1>
            <p>Masuk sebagai Administrator</p>
            <Gap height={20} />
            <Input
              type="text"
              label="Username atau Email"
              placeholder="Username/Email"
              value={username}
              onChange={ChangeUsername}
            />
            <Gap height={20} />
            <Input
              type={PasswordInputType}
              label="Password"
              placeholder="Password"
              value={password}
              onChange={ChangePassword}
            />
            <span className="password-toggle-icon text-dark"style={{marginLeft: "420px"}}>{ToggleIcon}</span>
            <Gap height={10} />
            <p className="reset-password" onClick={()=> history.push('/forget-password')}>Lupa password ? Klik disini</p>
            <Gap height={20} />
            <div className="row btn-click">
              <Button title="Login" onClick={submitLogin} />
              <Gap width={20} />
              <Button className="btn btn-outline-secondary text-light"
                title="Register"
                onClick={() => history.push("/register")}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
