import { makeAutoObservable } from 'mobx';

class AuthStore {
    auth: null|boolean = null;

    constructor() {
        makeAutoObservable(this);
    }

    init() {
        if (localStorage.getItem('auth') === null) {
            this.auth = false;
            localStorage.setItem('auth', 'false');
            localStorage.setItem('user', '');
        } else if (localStorage.getItem('auth') === 'true') {
            this.auth = true;
            localStorage.setItem('auth', 'true');
        } else {
            this.auth = false;
            localStorage.setItem('auth', 'false');
            localStorage.setItem('user', '');
        }
    }

    login(userData: object) {
        this.auth = true;
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    }
}

export default new AuthStore();
