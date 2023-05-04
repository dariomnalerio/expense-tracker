const {updateUser, createUser, getUsers, deleteUser, getUser} = require("../controllers/userController")

const express = require("express");
const Router = express.Router();

Router.post("/", createUser)

Router.put("/", updateUser)

Router.get("/", getUsers)

Router.get("/:uid", getUser) //Needs uid to be added to the database

Router.delete("/", deleteUser) //Needs uid to be added to the database



export {Router}