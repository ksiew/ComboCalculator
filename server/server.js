const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req,res)=>{
    res.send('test')
})

app.listen(8000, ()=>{
    console.log("running at: http://localhost:8000/")
})
