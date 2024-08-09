import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({ firstName: String, lastName: String });

const bookSchema = new mongoose.Schema({
    name: String,
    isbn: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique:true,
    },
    published: Date,
    author: authorSchema,
});


export const Book = mongoose.model('fancy-books', bookSchema);
//mongodb://localhost:27017