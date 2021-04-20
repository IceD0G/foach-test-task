import { makeAutoObservable } from 'mobx';

class UsersStore {
    users = [
        {
            id: 0,
            name: 'Phil Schiller',
            position: 'Senior Vice President, Worldwide Marketing',
            vacation: true,
        },
        {
            id: 1,
            name: 'Craig Federighi',
            position: 'Senior Vice President, Software Engineering',
            vacation: false,
        },
        {
            id: 2,
            name: 'Eddy Cue',
            position: 'Senior Vice President, Internet Software and Services',
            vacation: false,
        },
    ]

    constructor() {
        makeAutoObservable(this);
        localStorage.setItem('cards', JSON.stringify(this.users));
    }

    changeVacation(key: number, value: boolean) {
        this.users[key].vacation = value;
        localStorage.setItem('cards', JSON.stringify(this.users));
    }
}

export default new UsersStore();
