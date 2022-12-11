const express = require('express');
const router = express.Router();
const Book = require("../model/Book")

router.get("/",async (req,res,next)=>{
    //This route will provide all of the books
    let books;
    try{
        books = await Book.find();
    }
    catch(err) {
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message : "No books found"})
    }
    return res.status(200).json({books});
});

router.post("/",async (req,res,next) =>{
    const { name,author,description,price,available,image,purchase_link } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
            purchase_link
        });
     await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book)
    {
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({book})
})

router.get("/:id", async (req,res,next) =>{
    let book;
    try{
        book = await Book.findById(req.params.id)
    }
    catch(err)
    {
        console.log(err)
    }
    if(!book)
    {
        return res.status(404).json({message: "No Books Found"})
    }
    return res.status(200).json({book});
})

router.put("/:id", async (req,res,next) =>{
    let book;
    const { name,author,description,price,available, image , purchase_link } = req.body;
    try{
        book = await Book.findByIdAndUpdate(req.params.id,{
            name,
            author,
            description,
            price,
            available,
            image,
            purchase_link
        })
        book = await book.save()
    }
    catch(err){
        console.log(err)
    }
    if(!book)
    {
        return res.status(404).json({message:"Unable to find the book with that ID"})
    }
    return res.status(200).json({book})
})

router.delete("/:id", async (req,res,next) =>{
 let id = req.params.id
  try{
    book = await Book.findByIdAndRemove(id)
  }
  catch(err){
    console.log(err)
  }
  if(!book)
  {
    return res.status(404).json({message:"cannot find the book with that ID"})
  }
  return res.status(200).json({message:"book successfully deleted"})
})

module.exports = router;