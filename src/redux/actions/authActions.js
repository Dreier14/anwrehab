import AuthApi from '../../api/AuthApi';
import { PERSIST_LOGIN, PERSIST_LOGOUT } from '../reducers/authReducer';
import { addApiCallInProgress, removeApiCallInProgress, setError } from './apiActions';

export function login(loginForm) {
    return dispatch => {
        dispatch(addApiCallInProgress());
        return AuthApi.login(loginForm)
            .then(res => {
                dispatch(loginUser(res.data))
            })
            .catch(error => {
                dispatch(setError(error));
            })
            .finally(() => {
                dispatch(removeApiCallInProgress());
            });
    }
}
export const loginUser = ({ user, accessToken, expirationDate }) => ({
    type: PERSIST_LOGIN,
    user,
    accessToken,
    expirationDate
});

export function logout() {
    return dispatch => {
        dispatch(addApiCallInProgress());
        return AuthApi.logout()
            .then(res => {
                dispatch(logoutUser());
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
