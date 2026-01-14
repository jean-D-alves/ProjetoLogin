import 'dotenv/config'
import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pageDir = path.join(__dirname,"pages")
const app = express()
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(pageDir,"home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(pageDir,"login.html"))
})
app.get("create",(req,res)=>[
    res.sendFile(path.join(pageDir,"create.html"))
])
app.get("/users",(req,res)=>{
    res.sendFile(path.join(pageDir,"users.html"))
})
app.all((/.*/),(req,res)=>{
    res.sendFile(path.join(pageDir,"404.html"))
})

app.listen(process.env.PORT,()=>{
    console.log("http://localhost:3333")
})