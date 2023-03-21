const initState = {
  options: {
    loading: false,
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  },
};

const Reducer = (state = initState, action) => {
  CHANGE_LOADING: () => {
    return { ...state, options: { ...state.options, loading: action.value } };
  };
};

export default Reducer;
