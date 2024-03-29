import React from "react";
import { useHistory } from 'react-router-dom'
import { Footer } from "../../components/molecules";
import { CardLP1, CardLP2, CardLP3, HeroImg, Logo } from "../../assets";
import "./landingpage.scss";
import { Button, Card, Gap } from "../../components/atoms";
import Fade from 'react-reveal/Fade';

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="body landingpage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href={"https://www.aplus.co.id"} className="navbar-brand nav-logo">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="navbar-nav ml-auto mr-4">
            <li className="nav-item nav-link text-light">HOME</li>
            <li className="nav-item nav-link text-light">KEMUDAHAN</li>
            <li className="nav-item nav-link text-light">CONTACT</li>
          </ul>
        </div>
      </nav>

      {/* Jumbotron */}
      <div className="jumbotronPage pt-4">
        <div className="container pt-4">
          <div className="row ">
          <Fade bottom>
            <div className="col-lg-6 col-md-8">
              <img src={HeroImg} className="hero-img" alt="hero-img" />
            </div>
            </Fade>
            <div className="col-lg-6 col-md-4">
              <div className="header text-light">
                <h1 className="display-4">
                  LAKUKAN <strong>PENILAIAN</strong>
                  <br />
                  JADI <strong>LEBIH MUDAH</strong>
                </h1>
                <p className="text-light">
                  Kini kelola informasi terkait karyawan di PT. Aplus Pacific
                  jadi lebih mudah, lebih cepat dan terdokumentasi dengan baik
                </p>
                <Button title="Mulai Sekarang" onClick={()=> history.push('/login')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gap height={70} />
      {/* Card */}
      <section className="body-content" id="kemudahan">
        <div className="container">
          <div className="col-12 text-center section-2">
            <h1 className="display-4 ">KEMUDAHAN</h1>
            <h5>
              Berbagai fitur yang kami siapkan untuk
              <br />
              memudahkan Anda mendapat Informasi seutuhnya
            </h5>
          </div>

          <div className="row text-center pt-4">
            <Card
              imgCard={CardLP1}
              cardText="Lakukan Penilaian dengan efektif dan efisien"
            />
            <Card
              imgCard={CardLP2}
              cardText="Kontrak Karyawan diputuskan melalui sistem"
            />
            <Card
              imgCard={CardLP3}
              cardText="Kelola informasi dengan fleksibilitas tinggi"
            />
          </div>
        </div>
      </section>
      <Gap height={120} />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
