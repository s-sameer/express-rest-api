import express from "express"
import bodyParser from "body-parser" // allows us to take in incoming post requests bodies
import usersRoutes from "./routes/users.js"

const app = express() //initialize our app
const PORT = 5000 

app.use(bodyParser.json()) //initialise body-parser middleware

app.use("/users", usersRoutes) // starting path for all the routes

app.listen(PORT, ()=> console.log("Server running")) //listen to incoming requests
