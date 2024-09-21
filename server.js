const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, resp)=>{
    return resp.send({"name":"Reetesh", "age":30})
})

app.listen(process.env.PORT, ()=>{
    console.log("Application runnning on port ", process.env.PORT)
})