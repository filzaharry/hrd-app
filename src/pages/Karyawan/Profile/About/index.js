import React from 'react';

const About = (props) => {
  return (
    <div>
        <div className="container pt-4">
          <h5>Tentang Karyawan</h5>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Tempat Lahir</td>
                <td className="p-3 text-primary">
                  : {props.tempatLahir}
                </td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td className="p-3 text-primary">: {props.tglLahir}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td className="p-3 text-primary">: {props.gender}</td>
              </tr>
              <tr>
                <td>Agama</td>
                <td className="p-3 text-primary">: {props.agama}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="p-3 text-primary" style={{ width: "300px" }}>
                  <p>
                    : {props.alamat}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default About;
