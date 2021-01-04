import axios from "axios";
import { API_URL } from "../../utils/constants";

export const GET_DEPARTEMEN_LIST = "GET_DEPARTEMEN_LIST";
export const GET_DEPARTEMEN_DETAIL = "GET_DEPARTEMEN_DETAIL";


export const departemenAction = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}departemen`)
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: GET_DEPARTEMEN_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_DEPARTEMEN_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};



export const departemenDetailAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}departemen/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: GET_DEPARTEMEN_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_DEPARTEMEN_DETAIL,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};


