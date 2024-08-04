import { auth, signInWithEmailAndPassword } from '../../Firebaseconfig';

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});

export const loginAsync = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "LOGIN_REQUEST" }); // Optional: Dispatch request action
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(loginSuccess(userCredential.user));
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error("Error logging in:", errorMessage);
                dispatch(loginError(errorMessage));
            });
    };
};