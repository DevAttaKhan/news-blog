const initialState = {
  categories: [],
  totalPages: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        categories: action.payload.category,
        totalPages: action.payload.totalPages,
      };
    case "GET_CATEGORY":
      return { ...state, categories: [...state.categories, action.payload] };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter((el) => el._id !== action.payload),
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((el) =>
          el._id === action.payload._id ? (el = action.payload) : el
        ),
      };

    default:
      return state;
  }
};

export default reducer;
