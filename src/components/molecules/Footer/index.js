import React from 'react';
import { Logo, TwitterIC, FbIC, LinkedInIC } from '../../../assets';
import "./footer.scss";



export default function Footer() {
    return (
        <footer className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <a href={'https://www.google.com'}>
                  <img
                    src={Logo}
                    alt="aplus-pacific"
                    className="footer-logo"
                  />
                </a>
                <p className="text-light mt-2">
                  PT APLUS PACIFIC JL PRABU SILIWANGI KM 3,
                  <br />
                  JATI UWUNG TANGGERANG, RT.004/RW.005,
                  <br />
                  Pasir Jaya, Kec. Jatiuwung, Kota Tangerang, Banten 15135
                </p>
                <p className="text-light mt-2">
                  All Rights Reserved by Filza Harry
                </p>
              </div>
              <div className="col-6">
                <nav className="text-uppercase nav-footer text-right ml-auto">
                  <a className="text-light margin-nav-footer" href={'https://www.google.com'}>
                    faq
                  </a> <br/>
                  <a className="text-light margin-nav-footer" href={'https://www.google.com'}>
                    privacy policy
                  </a> <br/>
                  <a className="text-light margin-nav-footer" href={'https://www.google.com'}>
                    terms and conditions
                  </a> <br/>
                  <div className="ml-auto">
                    <a href={'https://www.google.com'}>
                      <img
                        src={FbIC}
                        alt="facebook"
                        className="socialmedia-footer"
                      />
                    </a>
                    <a href={'https://www.google.com'}>
                      <img
                        src={LinkedInIC}
                        alt="linked-in"
                        className="socialmedia-footer"
                      />
                    </a>
                    <a href={'https://www.google.com'}>
                      <img
                        src={TwitterIC}
                        alt="twitter"
                        className="socialmedia"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </footer>
    )
}
