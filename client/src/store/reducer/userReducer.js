const initialState = {
  totalPages: "",
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        totalPages: action.payload.totalPages,
        users: action.payload.users,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((el) => el._id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.map((el) => {
          if (el._id === action.payload._id) {
            return (el = action.payload);
          } else return el;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
