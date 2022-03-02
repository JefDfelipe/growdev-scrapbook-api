import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req:Request, res:Response) => {
    return res.send('Rota padrão');
});

const port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log('Api rodando');
});