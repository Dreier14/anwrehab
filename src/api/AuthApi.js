import { server } from '../constants/index';
import * as apiCallCreators from './apiCallCreators';

export default class AuthApi {
    static login(loginForm) {
        return apiCallCreators.post( '/login', loginForm)
                    .then(result => {console.log("FUCKING RESULT:", result); return result;})
                    .catch(error => {console.log("Error:", error); return error.message; });
    }

    static register(registerForm) {
        return apiCallCreators.post( '/register', registerForm)
                    .then(result => result)
                    .catch(error => error.message);
    }

    static logout() {
        return apiCallCreators.post( '/logout')
                    .then((result) => result)
                    .catch(error => error.message);
    }
}