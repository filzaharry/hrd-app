const initialStateDepartemen = {
  dataDepartemen: [],
}

const departemenReducer = (state = initialStateDepartemen, action) => {
  if(action.type === 'UPDATE_DATA_DEPARTEMEN'){
      return {
          ...state,
          dataDepartemen: action.payload
      }
  }
  return state;
}

export default departemenReducer;