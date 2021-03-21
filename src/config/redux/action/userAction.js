import Axios from "axios";
import { API } from "../../utils/constants";

export const setDataUser = () => (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token')
        }
      }
      console.log(config);
      Axios.get(`${API}v1/user`, config)
        .then((res) => {
          const responseAPI = res.data.data;
          dispatch({ type: "UPDATE_DATA_USER", payload: responseAPI });
        //   console.log("result config",responseAPI);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
};
