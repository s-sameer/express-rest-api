// Now we can create the routes a user can visit to get/post a resource
import express from "express";
import { v4 as uuidv4} from "uuid";

const router = express.Router()

const users = [

]

router.get('/', (req, res)=>{   //if we get a get request to this route, call this callback function
    res.send('Hellooo')
})

// res is used to send a response from the server to the client
// req is used to access the data inside a request from a client

router.post('/', (req, res) => {
    const newUser = req.body
    const userId = uuidv4() 
    newUser.id = userId //adding id property to user obj
    users.push(newUser) // pushing the user to our mock DB
    res.send("New user added") //response from the server
})

router.get('/:id', (req, res)=>{   
// req.params is used to access the data of the variable params
    const { id } = req.params 
    for (const user in users){
        
    }
})

export default router