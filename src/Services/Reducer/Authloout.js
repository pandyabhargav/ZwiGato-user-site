const initialState = {
  user: null
};

const authReducer3 = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer3;