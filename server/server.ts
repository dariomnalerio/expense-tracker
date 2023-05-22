import express, { json } from "express";
import {Router as userRouter} from "./src/routes/userRoutes"
import { verifyJwt } from "./middleware";
import admin  from 'firebase-admin';

import cors from 'cors';


const app = express(); // create express app

app.use(express.json()); // use express json middleware to parse request body

app.use(cors())
  
  // initializes firebase admin account
  var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learn-aba-default-rtdb.firebaseio.com"
});


// define a route handler for the default home page
app.get("/", async (req, res) => {
  res.send("Welcome");
});

// route handler for the updateUser endpoint
app.use("/user", verifyJwt, userRouter)


// start express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
