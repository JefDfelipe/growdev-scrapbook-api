"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(description) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1000);
        let today = new Date();
        let day = today.getDate();
        let month = (today.getMonth() + 1);
        let year = today.getFullYear();
        this.date = (`${month} / ${day} / ${year}`);
    }
    ;
}
exports.default = Note;
;
