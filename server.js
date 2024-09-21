const express = require('express')
require('dotenv').config()

const port = 5000;
const app = express()

app.get('/', (req, resp)=>{
    return resp.send({"name":"Reetesh Yadav", "age":30})
})

app.listen(port, ()=>{
    console.log("Application runnning on port ", process.env.PORT)
})