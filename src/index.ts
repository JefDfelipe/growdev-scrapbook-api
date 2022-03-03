import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

class User {
    constructor(public email: string, private password: string) { };
}

const user: Array<User> = []
const notes: Array<string> = [];

app.get('/', (req: Request, res: Response) => {
    return res.send('Rota padrão');
});

app.get('/notes', (req: Request, res: Response) => {
    return res.json({ mensagem: 'Read' });
});

app.get('/notes/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({ mensagem: 'Read one' });
});

app.post('/notes', (req: Request, res: Response) => {
    const {id, email, password} = req.body;

    return res.json({ mensagem: 'Create' });
});

app.put('/notes/:id', (req: Request, res: Response) => {
    return res.json({ mensagem: 'Update' });
});

app.delete('/notes/:id', (req: Request, res: Response) => {
    return res.json({ mensagem: 'Delete' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Api rodando');
});