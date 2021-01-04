const { GET_JABATAN_LIST } = require("../../actions/jabatan");

let initialState = {
  getJabatanList: false,
  errorJabatanList: false,
  title: "Jabatan",
};


const jabatan = (state = initialState, action) => {
  switch (action.type) {
    case GET_JABATAN_LIST:
      return {
        ...state,
        getJabatanList: action.payload.data,
        errorJabatanList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};



export default jabatan;
