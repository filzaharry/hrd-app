import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataKaryawan = () => (dispatch, setMode) => {
  Axios.get(`${API_URL}karyawan`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log('karyawan',responseAPI);
      setDataKaryawan(result)
      localStorage.setItem("Karyawan", JSON.stringify(result))
      dispatch({ type: "UPDATE_DATA_KARYAWAN", payload: responseAPI.data });
    })
    .catch((err) => {
      setMode('offline')
      let collection = localStorage.getItem('karyawan')
      console.log("error", err);
      setDataKaryawan(JSON.parse(collection))
    });
};
