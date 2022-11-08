const initialState = {
  posts: [],
  totalPages: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        posts: action.payload.data,
        totalPages: action.payload.totalPages,
      };
    case "DELETE_POST":
      return state.filter((el) => el._id !== action.payload);

    default:
      return state;
  }
};

export default Reducer;
