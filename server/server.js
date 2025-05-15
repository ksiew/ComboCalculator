const express = require("express")
const cors = require("cors")
const fs = require("fs")
const fsPromises = require("fs").promises
const app = express()

app.use(cors())
app.use(express.json())


app.get("/characters", async (req,res)=>{
    const chars = []
    const filePromises = []
    const folderPath = "./data/" + req.query.game
    fs.readdir(folderPath, async (err, files) => {
        if(err){
            return res.status(400)
        }else{
            files.forEach((file) => {
                filePromises.push(fsPromises.readFile(folderPath + "/" + file, "utf-8").then((result) =>{
                    chars.push(JSON.parse(result))
                }))
            })
            await Promise.all(filePromises)
            return res.status(200).json(chars);
        }
    })
})

app.listen(8000, ()=>{
    console.log("running at: http://localhost:8000/")
})
