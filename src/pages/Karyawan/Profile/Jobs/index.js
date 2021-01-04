import React from "react";


const Jobs = (props) => {
  return (
    <div>
        <div className="container pt-4">
          <h5>Informasi Pekerjaan</h5>

          <table className="text-dark">
            <thead></thead>
            <tbody>
              <tr>
                <td>NIK</td>
                <td className="p-3 text-primary">: {props.nik}</td>
              </tr>
              <tr>
                <td>Tanggal Masuk</td>
                <td className="p-3 text-primary">: {props.tglMulai}</td>
              </tr>
              <tr>
                <td>Jabatan</td>
                <td className="p-3 text-primary">: {props.jabatanId}</td>
              </tr>
              <tr>
                <td>Departemen</td>
                <td className="p-3 text-primary">: {props.departemenId}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Jobs;
