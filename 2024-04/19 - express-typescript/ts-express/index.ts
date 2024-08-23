import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

let i =4;
type User = { id: number, name: string, pwd: string, superField?:string };


type MyQuery = {
    maslo:string,
    ryba:string;
}

const users: User[] = [
    { id: 1, name: 'user1', pwd: 'password@@@' },
    { id: 2, name: 'user2', pwd: 'password@@@' },
    { id: 3, name: 'user3', pwd: 'password@@@' }
];


app.use(bodyParser.json());


app.get('/users', (req: Request, res: Response<User[]>) => {
    console.log('inside request');
    res.status(200);
    res.send(users);
    console.log('after request');
})


app.get('/users/:id', (req: Request<{ id: string }>, res: Response<User | string>) => {
    const id = parseInt(req.params.id);
    const user = users.find(x => x.id === id);
    if (!user) {
        res.status(404).send(`User ${id} not found`);
    }
    else { res.send(user) };
})

app.post('/users', (req: Request<{}, {}, Omit<User, 'id'|'superField'>, MyQuery>, res: Response) => {
    const newUser = req.body as User;
console.log(req.query);
    newUser.id=i++;
    users.push(newUser);
    res.send('ok');
});

app.post('/xml', (req, res) => {
    console.log(JSON.stringify(req.body));

    res.send('ok');
});


app.listen(3001, () => { });