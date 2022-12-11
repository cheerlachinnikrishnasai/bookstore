const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes')
const cors = require('cors')
const app = express();


//Middle wares
app.use(express.json())
app.use(cors());
app.use("/books",router) //localhost:5000/books


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://csai:Chinni333@cluster0.k3htavy.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connected to database"))
.then (() => {
    app.listen(5000);
})
.catch((err) => console.log(err))