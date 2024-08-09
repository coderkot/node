import express from 'express';
import mongoose, { ObjectId } from 'mongoose';
import { Book } from './schemas/book.mjs';

let id = 1;
// {
// id: number,
//     name:string
//     isbn:string,
//     author: {
//         firstName:String,
//         lastName:string
//     }
// }
const books = [];

mongoose.connect('mongodb://localhost:27017/otus-js-demo');

await Book.syncIndexes();

const createNew = async () => {
    const newBook1 = new Book({ name: 'Медный всадник', isbn: "ISBN_1" });
    await newBook1.save();
    const newBook2 = new Book({ name: 'Война и мир', isbn: "ISBN_2" });
    await newBook2.save();
    const newBook3 = new Book({
        name: 'Нос',
        isbn: "ISBN_3",
        author: {
            firstName: 'Николай',
            lastName: 'Гоголь'
        }
    });
    await newBook3.save();

};


const findAll = async () => {
    console.log(await Book.find());
    console.log('-------Теперь с фильтрами');

    console.log(await Book.find({ isbn: 'ISBN_3' }));
    console.log('-------Теперь с фильтрами OR');
    console.log(await Book.find({
        $or:
            [
                { isbn: 'ISBN_3' },
                { name: 'Война и мир' }]
    }, "name isbn author.firstName"));
}

const update = async () => {
    await Book.updateOne({ _id: '65a6ca8fc5593fc73c71b05d' }, { name: 'Нос-2' })

    const nos = await Book.findById('65a6ca8fc5593fc73c71b05d');
    nos.isbn = 'Поменял';

    await nos.save();
};

const deleteFancy= async () => {
    const newBook1 = new Book({ name: 'Отцы и дети', isbn: "ISBN_4" });
    await newBook1.save();
    console.log('----До удаления');
    console.log(await Book.find());
    console.log('----После удаления');
    await newBook1.deleteOne();

    console.log(await Book.find());
};

//await createNew();
//await findAll();
//await update();
//await deleteFancy();
Book.aggregate({
    
		$match: {
			'author.firstName': 'Александр'
		}
	}, {
		$limit: 3
	}
})
await Book.findById()// Book.find({_id: ''})
mongoose.disconnect();



// const app = express();
// app.use(express.json());
// app.get('/books', (req, res) => {
//     res.send(books);
// });

// app.get('/books/:id', (req, res) => {
//     res.send(books.find(x => x.id == req.params.id));
// });


// app.post('/books', (req, res) => {
//     console.log(req.body);
//     const b = req.body;
//     b.id = id++;
//     books.push(b);
//     res.status(200).send('ok');
// });

// app.put('/books/:id', (req, res) => {
//     const toUpdate = books.find(x => x.id == req.params.id)
//     if (!toUpdate) {
//         res.status(404).send(`Book id=${req.params.id} not found`);
//     }
//     else {
//         const b = req.body;
//         if (b.author) {
//             toUpdate.author = b.author;
//         }
//         if (b.name) {
//             toUpdate.name = b.name;
//         }
//         if (b.isbn) {
//             toUpdate.isbn = b.isbn;
//         }
//         res.status(200).send('ok');
//     }
// });

// app.delete('/books/:id', (req, res) => {
//     const toUpdate = books.find(x => x.id == req.params.id)
//     if (!toUpdate) {
//         res.status(404).send(`Book id=${req.params.id} not found`);
//     }
//     else {
//         const index = books.indexOf(toUpdate);
//         books.splice(index, 1);
//         res.status(204).send('ok');
//     }
// });


//app.listen({ port: 3333 }, () => console.log('ready'));

