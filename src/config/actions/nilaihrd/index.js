import axios from "axios";
import { API_URL } from "../../utils/constants";

export const GET_NILAIHRD_LIST = "GET_NILAIHRD_LIST";

export const NilaiHrdAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    // nilai masih undefined
      .get(`${API_URL}/periode/${id}/nilaihrd`)
      .then(function (response) {
        console.log(response);
        // handle success
        dispatch({
          type: GET_NILAIHRD_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        dispatch({
          type: GET_NILAIHRD_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};
