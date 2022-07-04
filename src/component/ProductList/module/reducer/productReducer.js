const initialState = {
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTLIST":
      state.productList = action.payload;
      break;
    default:
      break;
  }

  return { ...state };
};

export default productReducer;
