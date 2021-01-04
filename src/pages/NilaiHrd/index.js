import {
  faArrowLeft,
  faCheck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Gap, ModEdHRD } from "../../components";
import { Link } from "react-router-dom";

const NilaiHrd = () => {
  return (
    <div className="mt-2">
      <Link to="/karyawan" className="btn btn-info">
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} /> Kembali ke Karyawan
      </Link>
      <Gap height={20} />
      <h2>Daftar Nilai dari Departemen HRD</h2>
      <h5 className="text-muted">
        Selama Periode Kontrak Berlangsung Nilai akan terdata di sini
      </h5>
      <Gap height={20} />
      <div className="btn btn-primary">
        <ModEdHRD buttonLabel="Tambah Nilai" />
      </div>
      <Gap height={40} />

      {/*  */}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Periode</th>
            <th scope="col">Mulai Kontrak</th>
            <th scope="col">Selesai Kontrak</th>
            <th scope="col">Nilai HRD</th>
            <th scope="col">Nilai Supervisor</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 Tahun</td>
            <td>12-12-20</td>
            <td>12-12-21</td>
            {/* value = total nilainya */}
            <td className="text-primary">80</td>
            <td className="text-primary">70</td>
            <td className="text-success">
              <FontAwesomeIcon icon={faCheck} /> Diperpanjang
            </td>
            <td>
              <button className="btn btn-primary">Edit Nilai</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NilaiHrd;
