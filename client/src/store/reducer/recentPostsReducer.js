const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_RECENT_POSTS":
      return [...payload];

    default:
      return state;
  }
};

export default reducer;
