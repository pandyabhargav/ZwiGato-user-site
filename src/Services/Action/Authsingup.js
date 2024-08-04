import { auth, createUserWithEmailAndPassword } from "../../Firebaseconfig";
import swal from 'sweetalert';

export const signupSuccess = (user) => ({
    type: "SIGNUP_SUCCESS",
    payload: user,
});

export const signupError = (error) => ({
    type: "SIGNUP_ERROR",
    payload: error,
});

export const signupAsync = (register) => {
    return (dispatch) => {
        if (register.conf_password === register.password) {
            createUserWithEmailAndPassword(auth, register.email, register.password)
                .then((userCredential) => {
                    dispatch(signupSuccess(userCredential.user));
                    swal("Success!", "Sign up successful!", "success");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorMessage;

                    switch (errorCode) {
                        case "auth/email-already-in-use":
                            errorMessage = "Email is already registered. Please go to the login page.";
                            break;
                        case "auth/invalid-email":
                            errorMessage = "Invalid email address.";
                            break;
                        case "auth/weak-password":
                            errorMessage = "Password should be at least 6 characters.";
                            break;
                        default:
                            errorMessage = "An unexpected error occurred.";
                            break;
                    }

                    console.error("Error signing up:", errorMessage);
                    dispatch(signupError(errorMessage));
                    swal("Error!", errorMessage, "error");
                });
        } else {
            const errorMessage = "Passwords do not match";
            console.error("Error signing up:", errorMessage);
            dispatch(signupError(errorMessage));
            swal("Error!", errorMessage, "error");
        }
    };
};
