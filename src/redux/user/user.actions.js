import UserActionTypes from "./user.types";

// Google
export const googleSingInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const singInSuccess = user => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user
});

export const singInFailure = error => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error
});

// Email
export const emailSingInStart = emailAndPassword => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error
});
