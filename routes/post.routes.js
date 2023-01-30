const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {PostModel} = require("../models/post.model")

const notesController = Router();


notesController.get("/", async (req, res) => {
    const {tag} = req.query
    const notes = await PostModel.find({userId : req.body.userId, tag})
    res.send(notes)
})


notesController.post("/create", async (req, res) => {
    const {title, body, device, userId} = req.body;
    const note = new PostModel({
        title,
        body,
        device,
        userId
//         title ==> String
// body ==> String
// device ==> Strin
    })
    try{
        await note.save()
        res.send("post created")
    }
    catch(err){
        res.send("something went wrong")
    }
})


notesController.delete("/delete/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deletedNote = await PostModel.findOneAndDelete({_id : noteId, userId : req.body.userId})
    if(deletedNote){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})

notesController.patch("/update/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deletedNote = await PostModel.findOneAndUpdate({_id : noteId, userId : req.body.userId},req.body)
    if(deletedNote){
        res.send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})


module.exports = {
    notesController
}