"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    ;
}
const user = [];
const notes = [];
app.get('/', (req, res) => {
    return res.send('Rota padrão');
});
app.get('/notes', (req, res) => {
    return res.json({ mensagem: 'Read' });
});
app.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    return res.json({ mensagem: 'Read one' });
});
app.post('/notes', (req, res) => {
    const { id, email, password } = req.body;
    return res.json({ mensagem: 'Create' });
});
app.put('/notes/:id', (req, res) => {
    return res.json({ mensagem: 'Update' });
});
app.delete('/notes/:id', (req, res) => {
    return res.json({ mensagem: 'Delete' });
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Api rodando');
});
