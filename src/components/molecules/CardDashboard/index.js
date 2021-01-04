import React from "react";
import { Fade } from "react-reveal";
import { CardImgHello } from "../../../assets";
import "./cardgreetings.scss";

const CardDashboard = () => {
  return (
    <Fade bottom>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body text-left">
              <blockquote className="blockquote mb-0 ml-3">
                <p>
                  <b>Hallo Filza Harry!</b>
                </p>
                <div className="blockquote-footer pb-2">
                  Selamat Datang di <i>Contract Employee Data</i>
                </div>
              </blockquote>
            </div>
            <img
              src={CardImgHello}
              className="card-img ml-auto"
              alt="card-img-hello"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CardDashboard;
