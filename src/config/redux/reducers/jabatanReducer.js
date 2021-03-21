const initialStateJabatan = {
  dataJabatan: [],
}

const jabatanReducer = (state = initialStateJabatan, action) => {
  if(action.type === 'UPDATE_DATA_JABATAN'){
      return {
          ...state,
          dataJabatan: action.payload
      }
  }
  return state;
}

export default jabatanReducer;