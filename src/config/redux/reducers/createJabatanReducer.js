const initialState = {
  form: {
    nama_jab: "",
  },
};

const createJabatanReducer = (state = initialState, action) => {
  if (action.type === "SET_FORM_DATA") {
    return {
      ...state,
      form: {
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }
  return state;
}

export default createJabatanReducer
