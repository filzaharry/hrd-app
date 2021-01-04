const { GET_DEPARTEMEN_LIST, GET_DEPARTEMEN_DETAIL } = require("../../actions/departemen");

let initialState = {
  getDepartemenList: false,
  errorDepartemenList: false,
  getDepartemenDetail: false,
  errorDepartemenDetail: false,
  title: "Departemen",
};


const departemen = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTEMEN_LIST:
      return {
        ...state,
        getDepartemenList: action.payload.data,
        errorDepartemenList: action.payload.errorMessage,
      };
    case GET_DEPARTEMEN_DETAIL:
      return {
        ...state,
        getDepartemenDetail: action.payload.data,
        errorDepartemenDetail: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
export default departemen;
