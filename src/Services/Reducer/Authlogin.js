const initialState = {
    user: null,
    isLoading: false,
    error: null
};

const authReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default authReducer2;