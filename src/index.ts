import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import User from './User';
import Note from './Notes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// id, descrição, data, ação
declare global {
    namespace Express {
        interface Request {
            userIndex: number
        }
    }
};

const users: User[] = [];

interface INotes {
    description: string
};

const notes: Array<INotes> = [];

function findUser(req: any, res: Response, next: NextFunction) {
    const { id } = req.params;
    const user = users.find((search) => search.id === parseInt(id));

    if (!user) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado!'
        });
    };
    req.user = user;
    next();
};

function findUserID(req: any, res: Response, next: NextFunction) {
    const { id } = req.params;
    const idUsuario = users.findIndex((userid) => userid.id === parseInt(id));

    if (idUsuario < 0) {
        return res.status(404).json({
            mensagem: 'Usuário inválido'
        });
    };

    next();
};

app.post('/register', (req: Request, res: Response) => {
    const { name, password } = req.body;
    const user = new User(name, password);
    
    if (users.find(username => user.name === name)) {
        return res.json({
            msg: 'Usuário já existe.'
        });
    };
    
    users.push(user);
    
    return res.status(201).json({
        msg: 'Usuário criado com sucesso!!'
    });
});

app.post('/login', (req: Request, res: Response) => {
    const { name, password } = req.body;
    const user = users.find(username => username.name === name);
    
    if (user) {
        const pw = user.password === password;
        if (pw) {
            res.status(200).json(user);
        } else {
            return res.status(404).json({
                msg: 'Senha inválida!'
            });
        };
    } else {
        return res.status(404).json({
            msg: 'Usuário não encontrado!'
        });
    };
    return res.sendStatus(200);
});

app.get('/index-users', (req: Request, res: Response) => {
    return res.json(users.map(user => {
        return {
            name: user.name,
            id: user.id
        };
    }));
});

app.get('/show-user/:id', findUser, (req: any, res: Response) => {
    return res.json(req.user);
});

app.post('/notes/:id/new-note', findUserID, (req: Request, res: Response) => {
    const { id } = req.params;
    const { description } = req.body;
    const userID = users.findIndex((userid) => userid.id === parseInt(id));

    const userNote = new Note(description);
    users[userID].notes.push(userNote);

    return res.status(201).json({
        msg: 'Recado criado.'
    });
});

app.get('/notes-index/:userId', (req: Request, res: Response) => {
    const { userId } = req.params;
    const userID = users.find((userid) => userid.id === parseInt(userId));

    if (userID) {
        return res.json(userID?.notes);
    };
});

app.put('/notes/:userId/:noteId', (req: Request, res: Response) => {
    const { userId, noteId } = req.params;
    const { description } = req.body;
    const user = users.findIndex((userid) => userid.id === parseInt(userId));
    const item = users[user].notes.find(note => note.id === parseInt(noteId));

    if (item) {
        item.description = description;
    };

    const getUser = users.find((userid) => userid.id === parseInt(userId));

    return res.status(200).json({
        msg: 'Recado atualizado', getUser
    });
});

app.delete('/notes/:userId/delete-notes/:noteId', (req: Request, res: Response) => {
    const {userId, noteId} = req.params;
    const userID = users.findIndex((userid) => userid.id === parseInt(userId));
    const noteID = users[userID].notes.findIndex((note) => note.id === parseInt(noteId));

    if (userID < 0) {
        return res.status(404).json({
            msg: 'Usuário não encontrado!'
        });
    };

    if (noteID < 0) {
        return res.status(404).json({
            msg: 'Recado não encontrado!'
        });
    };

    users[userID].notes.splice(noteID, 1);

    return res.sendStatus(204);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Api rodando');
});