import React, { useState } from "react";
import { ForgotPassword } from "../../assets";
import { Button, Gap, Input } from "../../components";
import axios from 'axios'

const ForgetPassword = () => {
    const[email, setEmail] = useState('')
    const[error, setError] = useState('')
    const[alert, setAlert] = useState('')

    const changeEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
        setError('')
    }

const send = () => {
    // console.log('diklik');
    if(!email){
        setError('Waduh isi atuh emailnya, coba lagi yuk!')
    } else {
        axios.put('http://localhost:4000/v1/forgotpassword', {email: email})
        .then(res => {
            setEmail('')
            // console.log(res);
            setAlert('Email Terkirim! Silahkan cek email Anda')
            setTimeout(() => {
                setAlert('')
            }, 3000);
        })
    }
}

  return (
    <div className="container">
      <Gap height={30} />
      <div className="col-sm-12 col-lg-8 mx-auto text-center">
        {
            error && (
                <div className="col-lg-8 alert alert-danger mx-auto">
                    <p>{error}</p>
                </div>
            )
        }
        {
            alert && (
                <div className="col-lg-8 alert alert-success mx-auto">
                    <p>{alert}</p>
                </div>
            )
        }
        <h3 className="text-center text-danger">Lupa Password</h3>
        <img src={ForgotPassword} alt="forgot-pass" style={{maxWidth: '500px'}} />
        <h5 className="text-center">Jangan Khawatir!</h5>
        <p className="text-center">
          Lakukan reset password dengan memasukkan email Anda <br/> yang sudah
          ter-registrasi di bawah ini
        </p>
        <div className="col col-lg-9 mx-auto mb-4">
        <Input type="text" placeholder="contoh: example@email.com" value={email} onChange={changeEmail} />
        <Gap height={20} />
        <Button title="Reset Password" style={{maxWidth: '500px'}} onClick={send} />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
