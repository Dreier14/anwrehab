import AuthApi from '../../api/AuthApi';
import { PERSIST_LOGIN, PERSIST_LOGOUT } from '../reducers/authReducer';
import { addApiCallInProgress, removeApiCallInProgress, setError } from './apiActions';

export function login(loginForm) {
    return async dispatch => {
        dispatch(addApiCallInProgress());
        try {
            const loggedInUser = await AuthApi.login(loginForm)
            dispatch(loginUser(loggedInUser));
        } catch(error) {
            console.log("Error:", error);
            dispatch(setError(error));
        } finally {
            dispatch(removeApiCallInProgress());
        }
    }
}
export const loginUser = ({  sessionId, info, expirationDate }) => {
    console.log("Arguments:", arguments);
    return {
        type: PERSIST_LOGIN,
        sessionId,
        info,
        expirationDate
    };
}

export function register(registerForm) {
    return dispatch => {
        dispatch(addApiCallInProgress());
        return AuthApi.register(registerForm)
            .then(isSuccess => {
                if(!isSuccess) throw new Error("The registration was not successful.")
            })
            .catch(error => {
                dispatch(setError(error));
            })
            .finally(() => {
                dispatch(removeApiCallInProgress());
            });
    }
}

export function logout() {
    return dispatch => {
        dispatch(addApiCallInProgress());
        return AuthApi.logout()
            .then(isSuccess => {
                if(isSuccess) dispatch(logoutUser());
                throw new Error('Logout was not successful.')
            })
            .catch(error => {
                dispatch(setError(error));
            })
            .finally(() => {
                dispatch(removeApiCallInProgress());
            });
    }
}
export const logoutUser = () => ({
    type: PERSIST_LOGOUT
});
