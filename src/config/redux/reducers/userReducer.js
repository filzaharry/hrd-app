const initialStateUser = {
  dataUser: [],
}

const userReducer = (state = initialStateUser, action) => {
  if(action.type === 'UPDATE_DATA_USER'){
      return {
          ...state,
          dataUser: action.payload
      }
  }
  return state;
}

export default userReducer;