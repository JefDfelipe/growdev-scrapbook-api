import Notes from './Notes';

export default class User {
    notes: Notes[] = [];
    id: number;
    constructor(
        public name: string,
        public password: string
    ) {
        this.id = Math.floor(Math.random() * 1000);
    };
};  