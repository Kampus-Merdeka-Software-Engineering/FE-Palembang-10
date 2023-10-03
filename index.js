import express from "express";
import dotenv from "dotenv";
import coursesRouter from "./routes/courses.js";
import bodyParser from "body-parser";


dotenv.config()

const app = express()
const port = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

// define course router 
app.use("/courses", coursesRouter);


// middleware 
app.use((error, request, response, next) => {
  response.status(500);
  response.json({
    message: "internal server error"
  });
  
  console.log("log error form middleware");
  console.error(error);
  next();
});

// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})