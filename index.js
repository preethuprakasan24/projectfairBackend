//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')

//import mongodb connection file
require('./connection')


//create server
const pfServer = express()
//to connect with frontend

pfServer.use(cors({
    origin: 'https://project-fair-frontend-rust.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));
// pfServer.use(cors())

//parse json format -json()
pfServer.use(express.json())

//use router
pfServer.use(router)

pfServer.use('/uploads', express.static('./uploads'))

//Port
const PORT = 4000 || Process.env.PORT

//Server checking the request received at port
pfServer.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`);
})

//logic

//get request
// pfServer.get('/get',(req,res)=>{
//     res.send("get request received")
// })

//post request
// pfServer.post('/post',(req,res)=>{
//     res.send('post request received')
// })

//put request
// pfServer.put('/put',(req,res)=>{
//     res.send('put request received')
// })

//delete request
// pfServer.delete('/delete', (req,res)=>{
//     res.send('delete request received')
// })