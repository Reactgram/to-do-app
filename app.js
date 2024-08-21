const express = require('express'); 
const cors = require('cors');

const app = express();

const PORT = 5010;


// Middleware: 
app.use(express.json()); 

// set up cors to allow us to accept requests from our client

// corsOptions = {
//     origin: "http://localhost:3000"
// }

// app.use(cors(corsOptions));

app.use(cors());

// apis:

let todoList = [
    {id: 1, title: 'Learn Node.js', completed: false},
    {id: 2, title: 'Learn Express.js', completed: true},
    {id: 3, title: 'Learn React.js', completed: false}
]


// get all Todos

app.get("/todos", (req, res) => {

    res.json({
        list: todoList
    })
})

// add a Todo

app.post("/add", (req, res) => {
    let item = req.body;

    let title = item.title;
    let completed = item.completed;
    let id = todoList.length + 1;

    // add the item to the list
    todoList.push({id, title, completed});

    res.json({
        message: "Todo added successfully",
        list: todoList
    })
})

// update a Todo

// app.put("/update",(req, res) => {
    
// })

// delete a Todo



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})