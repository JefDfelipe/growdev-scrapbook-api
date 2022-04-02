"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.notes = [];
        this.id = Math.floor(Math.random() * 1000);
    }
    ;
}
exports.default = User;
;
