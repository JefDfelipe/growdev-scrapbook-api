import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req:Request, res:Response) => {

});

app.listen(8080,() => {
    console.log('Api rodando');
});