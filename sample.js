// // import express from 'express';
// const express = require('express');
// const app  = express()
// const PORT = 5010



// // Middleware:
// app.use(express.json())

// app.get("/hello", (req, res)=>{
//     res.json({message: "Hey Good Morning, How are you?"})
// })


// app.post("/sum", (req,res)=>{
//     // console.log(req.body) // {num1: 10, num2: 20}
//     // let num1 = req.body.num1
//     // let num2 = req.body.num2
//     // console.log(req.headers)    
//     // let num1 = req.headers.num1
//     // let num2 = req.headers.num2

//     console.log(req.query) // {num1: 10, num2: 20}
//     let num1 = req.query.num1
//     let num2 = req.query.num2
//     let sum = Number(num1) + Number(num2)
//     res.json({message: `Sum of ${num1} and ${num2} is ${sum}`})
// })



// app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})

