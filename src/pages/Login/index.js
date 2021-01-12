import React, { Fragment, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import "./login.scss";
import axios from "axios";
import addNotification from "react-push-notification";
import swal from "sweetalert";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

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

  const submitLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:4000/v1/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
          swal("Selamat Datang !", result.data.message, "success");
          addNotification({
            title: "Selamat Datang Kembali !!!",
            message: result.data.message,
            icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
            theme: "darkblue",
            native: true,
            duration: 30000,
          });
        }
        // console.log(result.data.token);
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        setError(e.response.data.message);
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
          <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        )}
            <h1 className="display-4">Login</h1>
            <p>Masuk sebagai Administrator</p>
            <Gap height={20} />
            <Input
              type="text"
              label="Username"
              placeholder="Username"
              value={username}
              onChange={ChangeUsername}
            />
            <Gap height={20} />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={ChangePassword}
            />
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
