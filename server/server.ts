import express, { json } from "express";
import {Router as userRouter} from "./src/routes/userRoutes"

const app = express(); // create express app

app.use(express.json()); // use express json middleware to parse request body

// middleware to allow cross origin requests from any domain
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// define a route handler for the default home page
app.get("/", async (req, res) => {
  res.send("Welcome");
});

// route handler for the updateUser endpoint
app.use("/user", userRouter)


// start express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
