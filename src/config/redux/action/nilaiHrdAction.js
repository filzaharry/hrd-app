import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setNilaiHrd = (id) => (dispatch) => {
  Axios.get(`${API_URL}periode/${id}`)
    .then((result) => {
      const responseAPI = result.data;
      console.log('periode setNilaiHrd',responseAPI);
      dispatch({ type: "NILAI_HRD", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
