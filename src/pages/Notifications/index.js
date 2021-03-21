import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Gap } from '../../components'

const Notification = () => {
    return (
        <div className="col col-lg-12 mt-4">
          <Gap height={100} />
          <h4>Kolom Informasi Notifikasi</h4>
          <div className="ml-1">
            <div className="form-row form-group">
              <input
                style={{ width: "600px" }}
                className="form-control"
                type="text"
                id="info"
                placeholder="Masukkan Informasi Disini"
              />
              <button type="submit" className="btn btn-primary ml-2">
                <FontAwesomeIcon icon={faPlus} /> Buat Notifikasi
              </button>
            </div>
            </div>
          {/* isi Notification List */}
          <div className="ml-1">
            <div className="form-row ">
              <div className="btn btn-outline-info disabled">
                <p>
                  Ahmad Bahari APK.123 Habis Kontrak Pada Tanggal 12 Januari
                  2020"{" "}
                </p>
              </div>
              <button type="submit" className="btn btn-warning ml-2">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button type="submit" className="btn btn-danger ml-2">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          </div>
    )
}

export default Notification
