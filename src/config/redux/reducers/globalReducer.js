const initialState = {
  name: "Filza",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Harry",
    };
  }
  return state;
};

export default globalReducer;
