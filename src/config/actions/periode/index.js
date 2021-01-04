import axios from "axios";
import { API_URL, API_URL_SPV } from "../../utils/constants";

export const GET_PERIODE_LIST = "GET_PERIODE_LIST";
export const GET_PERIODE_DETAIL = "GET_PERIODE_DETAIL";

export const periodeAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}/karyawan/${id}/periode`)
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        dispatch({
          type: GET_PERIODE_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_PERIODE_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};

export const periodeDetailAction = (id) => {
    return (dispatch) => {
      // Make a request for a user with a given ID
      axios
        .get(`${API_URL}/karyawan/${id}/periode/${id}`)
        .then(function (response) {
          // handle success
          // console.log("dari folder action bro",response);
          dispatch({
            type: GET_PERIODE_DETAIL,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          // handle error
          dispatch({
            type: GET_PERIODE_DETAIL,
            payload: {
              data: false,
              errorMessage: false,
            },
          });
        });
    };
  };


// export const periodeDetailAction = (id) => {
//   return (dispatch) => {
//     // Make a request for a user with a given ID
//     axios
//       .get(`${API_URL_SPV}periode/${id}/nilaispv`)
//       .then(function (response) {
//         // handle success
//         console.log("dari folder action bro",response);
//         dispatch({
//           type: GET_PERIODE_DETAIL,
//           payload: {
//             data: response.data,
//             errorMessage: false,
//           },
//         });
//       })
//       .catch(function (error) {
//         // handle error
//         dispatch({
//           type: GET_PERIODE_DETAIL,
//           payload: {
//             data: false,
//             errorMessage: false,
//           },
//         });
//       });
//   };
// };