const initialState = {
    user: null,
    isLogin: false,
    error: null,
    success: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isLogin: true,
                error: null,
                success: "Signup successful! Welcome!"
            };
        case "SIGNUP_ERROR":
            return {
                ...state,
                error: action.payload,
                success: null
            };
        default:
            return state;
    }
};

export default authReducer;