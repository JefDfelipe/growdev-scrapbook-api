"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const User_1 = __importDefault(require("./User"));
const Notes_1 = __importDefault(require("./Notes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
const users = [];
;
const notes = [];
function findUser(req, res, next) {
    const { id } = req.params;
    const user = users.find((search) => search.id === parseInt(id));
    if (!user) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado!'
        });
    }
    req.user = user;
    next();
}
;
function findUserID(req, res, next) {
    const { id } = req.params;
    const idUsuario = users.findIndex((userid) => userid.id === parseInt(id));
    if (idUsuario < 0) {
        return res.status(404).json({
            mensagem: 'Usuário inválido'
        });
    }
    next();
}
;
app.get('/index-users', (req, res) => {
    return res.json(users.map(user => {
        return {
            name: user.name,
            id: user.id
        };
    }));
});
app.get('/show-user/:id', findUser, (req, res) => {
    return res.json(req.user);
});
app.post('/register', (req, res) => {
    const { name, password } = req.body;
    const user = new User_1.default(name, password);
    if (users.find(username => user.name === name)) {
        return res.json({
            msg: 'Usuário já existe.'
        });
    }
    users.push(user);
    return res.status(201).json({
        msg: 'Usuário criado com sucesso!!'
    });
});
app.post('login', (req, res) => {
    const { name, password } = req.body;
    const user = users.find(username => username.name === name);
    if (user) {
        const pw = user.password === password;
        if (pw) {
            res.status(200).json(user);
        }
        else {
            return res.status(404).json({
                msg: 'Senha inválida!'
            });
        }
    }
    else {
        return res.status(404).json({
            msg: 'Usuário não encontrado!'
        });
    }
    return res.sendStatus(200);
});
app.post('/notes/:id/new-note', findUserID, (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const userID = users.findIndex((userid) => userid.id === parseInt(id));
    const userNote = new Notes_1.default(description);
    users[userID].notes.push(userNote);
    return res.status(201).json({
        msg: 'Recado criado.'
    });
});
app.get('/notes-index/:userId', (req, res) => {
    const { userId } = req.params;
    const userID = users.find((userid) => userid.id === parseInt(userId));
    if (userID) {
        return res.json(userID?.notes);
    }
    ;
});
app.put('/notes/:userId/:noteId', (req, res) => {
    const { userId, noteId } = req.params;
    const { description } = req.body;
    const user = users.findIndex((userid) => userid.id === parseInt(userId));
    const item = users[user].notes.find(note => note.id === parseInt(noteId));
    if (item) {
        item.description = description;
    }
    ;
    const getUser = users.find((userid) => userid.id === parseInt(userId));
    return res.status(200).json({
        msg: 'Recado atualizado', getUser
    });
});
app.delete('/notes/:userId/delete-notes/:noteId', (req, res) => {
    const { userId, noteId } = req.params;
    const userID = users.findIndex((userid) => userid.id === parseInt(userId));
    const noteID = users[userID].notes.findIndex((note) => note.id === parseInt(noteId));
    if (userID < 0) {
        return res.status(404).json({
            msg: 'Usuário não encontrado!'
        });
    }
    ;
    if (noteID < 0) {
        return res.status(404).json({
            msg: 'Recado não encontrado!'
        });
    }
    ;
    users[userID].notes.splice(noteID, 1);
    return res.sendStatus(204);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Api rodando');
});
