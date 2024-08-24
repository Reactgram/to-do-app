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

app.patch("/update/",(req, res) => {
       let item = req.body; 
       // {id: 1, title: 'Learn Node.js', completed: true}
       let {id, title, completed} = item;
    //    console.log(id, title, completed);

      let todoItem = todoList.find(todo=> todo.id === id);
      let todoItemIndex = todoList.findIndex(todo=> todo.id === id);

     let  updatedTodoItem = {...todoItem, 
                 title:  title===undefined ? todoItem.title : title,
                 completed: completed===undefined ? todoItem.completed : completed
      }

    //   console.log(todoItem);

    todoList[todoItemIndex] = updatedTodoItem;

       res.json({
           message: "Todo updated successfully",
           list: todoList
       })
})



app.put("/update/:id",(req, res) => {
    let item = req.body;
    let id = req.params.id; 
    // { title: 'Learn Node.js', completed: true}
    let {title, completed} = item;
    console.log(id, title, completed);

   let todoItem = todoList.find(todo=> todo.id == id);
   let todoItemIndex = todoList.findIndex(todo=> todo.id ==id);

   console.log(todoItem,todoItemIndex);

  let  updatedTodoItem = {...todoItem, 
              title:  title===undefined ? todoItem.title : title,
              completed: completed===undefined ? todoItem.completed : completed
   }

 //   console.log(todoItem);

 todoList[todoItemIndex] = updatedTodoItem;

    res.json({
        message: "Todo updated successfully",
        list: todoList
    })
})


// delete a Todo

app.delete("/delete/:id", (req,res)=>{
      let id = req.params.id; // 2

      let tododoListUpdated  =  todoList.filter(todo=> todo.id != id);

        todoList = tododoListUpdated;


        res.json({
            message: "Todo deleted successfully",
            list: todoList
        })
        
})







app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})



