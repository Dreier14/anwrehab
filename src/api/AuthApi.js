import axios from 'axios';
import server from '../config.json';

export default class AuthApi {
    static login(username, password, rememberMe) {
        const loginForm = { username, password, rememberMe };
        return axios.post(server + '/login', loginForm)
                    .then(res => res.data)
                    .catch(error => error.message);
    }

    static logout() {
        return axios.post(server + '/logout')
                    .then((_) => ({success: true}))
                    .catch(error => error.message);
    }
}